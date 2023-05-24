import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Subscription } from 'rxjs';
import { IAirports, FlightsRequest, FlightsResponse, FlightsStateService } from '../../../core/index';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public flight$: BehaviorSubject<FlightsResponse[] | null>;
  public airports$: BehaviorSubject<IAirports[] | null>;


  constructor(private http: HttpClient,
              private flightsStateService: FlightsStateService) {
    this.flight$ = new BehaviorSubject<FlightsResponse[] | null>(null);
    this.airports$ = new BehaviorSubject<IAirports[] | null>(null);
  }
  public getAirports():Subscription {
  // @ts-ignore
    return this.http.get('search/airport').subscribe((value:IAirports[]) => {
    this.airports$.next(value)
  })
  }


  public getFlight(data:FlightsRequest){
    return this.http.post('search/flight',
      data
      // @ts-ignore
    ).subscribe((res: FlightsResponse[] )=> {
      this.flight$.next(res);
      console.log('Api Response:', res)
      this.flightsStateService.flights = res;
    });
  }
}
