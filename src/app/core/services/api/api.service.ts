import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IFlightOffer } from '../../../core/index';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private fetchFlightOffer(locationCode: string, destinationCode: string, departureDate: string, adultsAmount: string, stop: boolean): Observable<IFlightOffer> {
    const urlSearch = `v2/shopping/flight-offers?originLocationCode=${locationCode}&destinationLocationCode=${destinationCode}&departureDate=${departureDate}&adults=${adultsAmount}&nonStop=${stop}&max=250`;
    return this.http.get<IFlightOffer>(urlSearch);
  }

  public getFlightOffer(locationCode: string, destinationCode: string, departureDate: string, adultsAmount: string): Observable<IFlightOffer> {
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
