import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FlightsResponse } from '../../../core/index';

@Injectable({
  providedIn: 'root'
})
export class FlightsStateService {
  private flightsState = new BehaviorSubject<FlightsResponse[]>([]);

  constructor() {
    const storedFlights = localStorage.getItem('flights');
    if (storedFlights) {
      this.flightsState.next(JSON.parse(storedFlights));
    }
  }

  get flights$(): Observable<FlightsResponse[]> {
    return this.flightsState.asObservable();
  }

  set flights(flights: FlightsResponse[]) {
    this.flightsState.next(flights);
    localStorage.setItem('flights', JSON.stringify(flights));
  }
}
