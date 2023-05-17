import {Component, EventEmitter, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ApiService, IAirports} from "../../../../core";
import {FlightsResponse} from "../../../../core/models/flights.model";

@Component({
  selector: 'app-booking-journey',
  templateUrl: './booking-journey.component.html',
  styleUrls: ['./booking-journey.component.scss']
})
export class BookingJourneyComponent   implements  OnInit{
  public flights$!: BehaviorSubject<FlightsResponse[] | null>

  public selectedButton: number | null = null ;
  public onButtonClickEvent = new EventEmitter();



  constructor(private ApiService: ApiService) {
  }

  ngOnInit(): void {
    this.flights$ = this.ApiService.flight$
  }

  onButtonClick(item: number) {
    this.selectedButton = item;
  }
}
