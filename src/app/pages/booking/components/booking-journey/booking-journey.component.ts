import { Component, EventEmitter,
         Output, OnInit 
        } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { FlightsResponse, FlightsStateService
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
  public onDateButtonClickThereEvent = new EventEmitter();
  public isSelectedThere:boolean = false;
  public isSelectedBack:boolean = false;

  constructor(private flightsStateService: FlightsStateService) {}

  ngOnInit(): void {
    this.flightsStateService.flights$.subscribe((flights: FlightsResponse[] | null) => {
      this.flights$ = new BehaviorSubject<FlightsResponse[] | null>(flights);
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
    } else if (directionFlights === 'back') {
      this.isSelectedBack = true;
      this.selectedFlight.isSelected = true;
    }
  }

}