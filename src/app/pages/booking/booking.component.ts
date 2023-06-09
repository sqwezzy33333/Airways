import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService, ISearchFlightsForm } from '../../core/index';
import { Router } from '@angular/router';
import {
  ApiService,
  FlightsResponse,
  FlightsStateService,
  PassengerOption,
  SearchFlightsStateService,
} from '../../core/index';
import { Country } from '../../shared/index';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { LocationService } from 'src/app/core/services/location/location.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  @Output() public openResentSearchEvent = new EventEmitter();
  @Output() public increasePassengerCountEvent = new EventEmitter();
  @Output() public decreasePassengerCountEvent = new EventEmitter();
  @Output() public getPassengerSummaryEvent = new EventEmitter();

  public flights$!: BehaviorSubject<FlightsResponse[] | null>;
  public countries = Country;
  public isAuth!: boolean;
  public currentPath!: string;
  public searchForm!: ISearchFlightsForm | null;
  private tripType!: string | undefined;
  private flightThere!: FlightsResponse;
  private flightBack!: FlightsResponse;

  public isAttentionClose = false;
  public openStatus: boolean = false;
  public passengerOptions: PassengerOption[] = [
    { label: 'Adults', yearsLimit: '14+', passengerCount: 1 },
    { label: 'Children', yearsLimit: '2-14', passengerCount: 0 },
    { label: 'Infants', yearsLimit: '0-2', passengerCount: 0 },
  ];

  constructor(
    private location: Location,
    private locationService: LocationService,
    private flightsStateService: FlightsStateService,
    private authService: AuthService,
    private searchService: SearchFlightsStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchForm = this.searchService.getSearchFlightsForm();
    if (this.searchForm?.tripType) {
      this.tripType = this.searchForm.tripType;
    }

    this.flightsStateService.flights$.subscribe(
      (flights: FlightsResponse[] | null) => {
        this.flights$ = new BehaviorSubject<FlightsResponse[] | null>(flights);
      }
    );

    this.flightsStateService.backFlight.subscribe((el) => {
      this.flightBack = el;
    });

    this.flightsStateService.thereFlight.subscribe((el) => {
      this.flightThere = el;
    });

    this.locationService.currentLocation.subscribe((el) => {
      this.currentPath = el;
    });

    this.authService.isAuth$.subscribe((el) => {
      this.isAuth = el;
    });
  }

  public openResentSearch() {
    this.openStatus = !this.openStatus;
  }

  public increasePassengerCount(passenger: PassengerOption): void {
    passenger.passengerCount++;
  }

  public decreasePassengerCount(passenger: PassengerOption): void {
    if (passenger.passengerCount > 0) {
      passenger.passengerCount--;
    }
  }

  public getPassengerSummary(): string {
    const passengers = this.passengerOptions.filter(
      (option) => option.passengerCount > 0
    );
    const summary = passengers
      .map((option) => `${option.label} ${option.passengerCount}`)
      .join(', ');
    return summary || '';
  }

  public goBack() {
    this.location.back();
  }

  closeAttention() {
    this.isAttentionClose = false;
  }

  public checkContinuePage(): string {
    let nextPage: string = '';
    if (this.isAuth) {
      if (this.currentPath === '/booking/flights')
        nextPage = '/booking/passengers';
      if (this.currentPath === '/booking/passengers')
        nextPage = '/booking/passengers';
    } else {
      nextPage = '/booking/flights';
    }

    return nextPage;
  }

  checkAuth() {
    if (this.isAuth === false) {
      this.authService.onOpen();
    }
  }

  checkTickets() {
    if (
      this.tripType === 'roundTrip' &&
      !this.flightBack.flightNumber &&
      !this.flightThere.flightNumber
    ) {
      this.isAttentionClose = true;
    } else if (
      this.tripType === 'roundTrip' &&
      this.flightBack.flightNumber &&
      this.flightThere.flightNumber
    ) {
      this.router.navigate(['booking/passengers']);
    }

    if (this.tripType === 'oneWay' && !localStorage.getItem('thereFlight')) {
      this.isAttentionClose = true;
    } else if (
      this.tripType === 'oneWay' &&
      localStorage.getItem('thereFlight')
    ) {
      this.router.navigate(['booking/passengers']);
    }
  }
}
