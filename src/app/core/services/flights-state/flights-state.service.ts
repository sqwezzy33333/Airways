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

  getPriceForDate(date: Date): number | undefined {
    const flights = this.flightsState.getValue();
    const firstFlight = flights[0];
  
    const startDate = new Date(firstFlight.takeoffDate);
    const endDate = new Date(firstFlight.landingDate);

    startDate.setDate(startDate.getDate() - 5);
    endDate.setDate(endDate.getDate() + 5);
    
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    if (date >= startDate && date <= endDate) {
      const price = this.getPriceForDateRecursive(date, firstFlight);
      if (price) {
        return price;
      }
    }
    return undefined;
  }

  getPriceForDateBack(date: Date): number | undefined {
    const flights = this.flightsState.getValue();
    const lastFlight = flights[flights.length - 1];
  
    const startDate = new Date(lastFlight.takeoffDate);
    const endDate = new Date(lastFlight.landingDate);

    startDate.setDate(startDate.getDate() - 5);
    endDate.setDate(endDate.getDate() + 5);
    
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    
    if (date >= startDate && date <= endDate) {
      const price = this.getPriceForDateRecursive(date, lastFlight);
      if (price) {
        return price;
      }
    }
    return undefined;
  }
  
  getPriceForDateRecursive(date: Date, flight: FlightsResponse): number | undefined {
    const takeoffDate = new Date(flight.takeoffDate);
    const landingDate = new Date(flight.landingDate);

    takeoffDate.setHours(0, 0, 0, 0);
    landingDate.setHours(0, 0, 0, 0);

    if (date >= takeoffDate && date <= landingDate && flight.price && flight.price.usd) {
      return flight.price.usd;
    }
  
    if (flight.otherFlights) {
      for (const key in flight.otherFlights) {
        const otherFlight = flight.otherFlights[key];
        const price = this.getPriceForDateRecursive(date, otherFlight);
        if (price) {
          return price;
        }
      }
    }
  
    return undefined;
  }
}