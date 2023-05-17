import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, Subscription, switchMap} from 'rxjs';
import {IAirports, IFlightOffer} from '../../../core/index';
import { FlightsRequest, FlightsResponse} from "../../models/flights.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public flight$: BehaviorSubject<FlightsResponse[] | null>;
  public airports$: BehaviorSubject<IAirports[] | null>;


  constructor(private http: HttpClient) {
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
    console.log(data)
    return this.http.post('search/flight',
      data
      // @ts-ignore
    ).subscribe((res: FlightsResponse[] )=> {
      this.flight$.next(res);
    });
  }

  private fetchFlightOffer(locationCode: string, destinationCode: string, departureDate: string, adultsAmount: string, stop: boolean): Observable<IFlightOffer> {
    const urlSearch = `v2/shopping/flight-offers?originLocationCode=${locationCode}&destinationLocationCode=${destinationCode}&departureDate=${departureDate}&adults=${adultsAmount}&nonStop=${stop}&max=250`;
    return this.http.get<IFlightOffer>(urlSearch);
  }

  public getFlightOffer(locationCode: string, destinationCode: string, departureDate: string, adultsAmount: string, stop: boolean): Observable<IFlightOffer> {
    return this.fetchFlightOffer(locationCode, destinationCode, departureDate, adultsAmount, stop)
    .pipe(
      map(
        (response) => {
          //add logic for response
          return response;
        }
      )
    )
  }
}
