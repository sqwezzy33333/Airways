import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FlightsResponse} from "../../../../../core/models/flights.model";
import {ApiService} from "../../../../../core";
import {flush} from "@angular/core/testing";

@Component({
  selector: 'app-journey-flights',
  templateUrl: './journey-flights.component.html',
  styleUrls: ['./journey-flights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyFlightsComponent implements  OnInit{
  @Input() flight!:FlightsResponse


  constructor(private ApiService: ApiService) {
    console.log(this.flight)
  }

  ngOnInit(): void {
    console.log(this.flight)
  }

}
