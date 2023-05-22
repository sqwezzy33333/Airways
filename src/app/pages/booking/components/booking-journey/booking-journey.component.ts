import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ApiService, FlightsResponse } from "../../../../core/index";

@Component({
  selector: 'app-booking-journey',
  templateUrl: './booking-journey.component.html',
  styleUrls: ['./booking-journey.component.scss']
})
export class BookingJourneyComponent implements  OnInit{
  @Output() public openResentSearchEvent = new EventEmitter();
  @Output() public onSelectTripEvent = new EventEmitter();
 
  public flights$!: BehaviorSubject<FlightsResponse[] | null>
  public selectedDateButtonBack: Date | null = null ;
  public selectedDateButtonThere: Date | null = null ;
  public onDateButtonClickBackEvent = new EventEmitter();
  public onDateButtonClickThereEvent = new EventEmitter();
  public isTripSelectedThere:boolean = false;
  public isTripSelectedBack:boolean = false;

  constructor(private ApiService: ApiService) {
  }

  ngOnInit(): void {
    this.flights$ = this.ApiService.flight$;
  }
  
  public onDateButtonClickBack(item: Date) {
    this.selectedDateButtonBack = item;
  }
  public onDateButtonClickThere(item: Date) {
    this.selectedDateButtonThere = item;
  }

  public onSelectTrip(directionFlights: string) {
    if (directionFlights === 'there') {
      this.isTripSelectedThere = true;
    } else if (directionFlights === 'back') {
      this.isTripSelectedBack = true;
    }
  }

}
