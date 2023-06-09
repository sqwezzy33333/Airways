import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  FlightsResponse,
  FlightsStateService,
  DateWithPrice,
  SliderService,
  FlightAvailabilityService,
  CurrencyService,
  SearchFlightsStateService,
} from '../../../../core/index';

@Component({
  selector: 'app-booking-journey',
  templateUrl: './booking-journey.component.html',
  styleUrls: ['./booking-journey.component.scss'],
})
export class BookingJourneyComponent implements OnInit {
  @Output() public openResentSearchEvent = new EventEmitter();
  @Output() public onSelectTripEvent = new EventEmitter();

  public selectedFlight: FlightsResponse | null = null;
  public flights$!: BehaviorSubject<FlightsResponse[] | null>;
  public selectedDateButtonBack: Date | null = null;
  public selectedDateButtonThere: Date | null = null;
  public onDateButtonClickBackEvent = new EventEmitter();
  public oBacknDateButtonClickThereEvent = new EventEmitter();
  public isSelectedThere: boolean = false;
  public isSelectedBack: boolean = false;
  public currencyType!: string;
  public isAttentionClose = true;

  public datesThere: DateWithPrice[] = [];
  public datesBack: DateWithPrice[] = [];

  public areFlightsAvailableThere: boolean = false;
  public areFlightsAvailableBack: boolean = false;

  constructor(
    private flightsStateService: FlightsStateService,
    private sliderService: SliderService,
    private flightAvailabilityService: FlightAvailabilityService,
    private currencyService: CurrencyService,
    private searchFormService: SearchFlightsStateService
  ) {}

  ngOnInit(): void {
    this.flightsStateService.flights$.subscribe(
      (flights: FlightsResponse[] | null) => {
        this.flights$ = new BehaviorSubject<FlightsResponse[] | null>(flights);
        this.updateDatePrices();
      }
    );

    this.currencyService.currencySubject.subscribe((currency: string) => {
      this.currencyType = currency;
    });

    this.updateDatePrices();

    this.flightAvailabilityService.flightsAvailableThere$.subscribe(
      (areFlightsAvailable: boolean) => {
        this.areFlightsAvailableThere = areFlightsAvailable;
      }
    );
    this.flightAvailabilityService.flightsAvailableBack$.subscribe(
      (areFlightsAvailable: boolean) => {
        this.areFlightsAvailableBack = areFlightsAvailable;
      }
    );
    this.selectedDateButtonThere = this.setSelectedDateButtonThere();
    this.selectedDateButtonBack = this.setSelectedDateButtonBack();

    this.setOneWayDate();
  }

  setSelectedDateButtonThere(): Date | null {
    let dateStr: string | undefined =
      this.searchFormService.getSearchFlightsForm()?.date.startDate;

    if (dateStr) {
      let fullDate = new Date(dateStr);

      let userDate = this.datesThere.filter((el) => {
        return fullDate.getDate() === el.date.getDate();
      });
      if (userDate[0].date) return userDate[0].date;
    }
    return null;
  }

  setSelectedDateButtonBack(): Date | null {
    let dateStr = this.searchFormService.getSearchFlightsForm()?.date.endDate;
    if (dateStr) {
      let fullDate = new Date(dateStr);
      let userDate = this.datesBack.filter((el) => {
        return fullDate.getDate() === el.date.getDate();
      });
      if (userDate[0].date) return userDate[0].date;
    }
    return null;
  }

  setOneWayDate() {
    let dateStr: string | undefined =
      this.searchFormService.getSearchFlightsForm()?.date.singleDate;
    if (dateStr) {
      this.selectedDateButtonThere = new Date(dateStr);
    }
  }

  getFirstDateBack() {
    let arr = this.datesBack.filter((el) => {
      return el.price;
    });
    let firstDate = new Date(arr[0].date);
    return firstDate;
  }

  private updateDatePrices(): void {
    const storedDates = this.sliderService.getDates();
    this.datesThere = storedDates.map((dateString) => {
      const date = new Date(dateString);
      const price = this.flightsStateService.getPriceForDate(date);
      return { date, price } as DateWithPrice;
    });

    this.datesBack = storedDates.map((dateString) => {
      const date = new Date(dateString);
      const price = this.flightsStateService.getPriceForDateBack(date);
      return { date, price } as DateWithPrice;
    });
  }

  public onDateButtonClickBack(item: Date) {
    this.selectedDateButtonBack = item;
  }

  public onDateButtonClickThere(item: Date) {
    this.selectedDateButtonThere = item;
  }

  public onSelectTrip(directionFlights: string, flight: FlightsResponse) {
    this.selectedFlight = flight;

    if (directionFlights === 'there') {
      this.isSelectedThere = true;
      this.selectedFlight.isSelected = true;

      this.flightsStateService.setThereFlight(flight);
    } else if (directionFlights === 'back') {
      this.isSelectedBack = true;
      this.selectedFlight.isSelected = true;

      this.flightsStateService.setBackFlight(flight);
    }
  }

  closeAttention() {
    this.isAttentionClose = false;
  }
}
