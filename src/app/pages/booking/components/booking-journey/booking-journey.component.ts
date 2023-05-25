import { Component, EventEmitter,
         Output, OnInit 
        } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { FlightsResponse, FlightsStateService,
          DateWithPrice,
          SliderService
        } from "../../../../core/index";

@Component({
  selector: 'app-booking-journey',
  templateUrl: './booking-journey.component.html',
  styleUrls: ['./booking-journey.component.scss']
})
export class BookingJourneyComponent implements  OnInit{
  @Output() public openResentSearchEvent = new EventEmitter();
  @Output() public onSelectTripEvent = new EventEmitter();
 
  public selectedFlight: FlightsResponse | null = null;
  public flights$!: BehaviorSubject<FlightsResponse[] | null>
  public selectedDateButtonBack: Date | null = null ;
  public selectedDateButtonThere: Date | null = null ;
  public onDateButtonClickBackEvent = new EventEmitter();
  public oBacknDateButtonClickThereEvent = new EventEmitter();
  public isSelectedThere:boolean = false;
  public isSelectedBack:boolean = false;

  public datesThere: DateWithPrice[] = [];
  public datesBack: DateWithPrice[] = [];

  constructor(private flightsStateService: FlightsStateService,
              private sliderService: SliderService) {}

  ngOnInit(): void {
    this.flightsStateService.flights$.subscribe((flights: FlightsResponse[] | null) => {
      this.flights$ = new BehaviorSubject<FlightsResponse[] | null>(flights);
    });

    const currentDate = new Date();
    this.selectedDateButtonThere = currentDate;
    this.selectedDateButtonBack = currentDate;

    const storedDates = this.sliderService.getDates();

    if (storedDates) {
      this.datesThere = storedDates.map(dateString => {
        const date = new Date(dateString);
        const price = this.flightsStateService.getPriceForDate(date);

        return { date, price };
      });

      this.datesBack = storedDates.map(dateString => {
        const date = new Date(dateString);
        const price = this.flightsStateService.getPriceForDateBack(date);

        return { date, price };
      });
    }
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
    } else if (directionFlights === 'back') {
      this.isSelectedBack = true;
      this.selectedFlight.isSelected = true;
    }
  }

}