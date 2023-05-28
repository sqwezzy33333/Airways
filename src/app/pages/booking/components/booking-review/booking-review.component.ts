import { Component, OnInit } from '@angular/core';
import { PassengersFormStateService } from 'src/app/core/services/booking-passengers-state/booking-passengers-state.service';
import { FlightsStateService } from 'src/app/core';
import { FlightsResponse } from 'src/app/core';

@Component({
  selector: 'app-booking-review',
  templateUrl: './booking-review.component.html',
  styleUrls: ['./booking-review.component.scss'],
})
export class BookingReviewComponent implements OnInit {
  passengers: any[] = [];
  thereFlight!: FlightsResponse;
  backFlight!: FlightsResponse;

  constructor(
    private passService: PassengersFormStateService,
    private flightState: FlightsStateService
  ) {}

  ngOnInit(): void {
    this.createPassengersInfo();

    this.flightState.thereFlight.subscribe((el) => {
      this.thereFlight = el;
    });

    this.flightState.backFlight.subscribe((el) => {
      if (Object.entries(el).length !== 0) {
        this.backFlight = el;
        this.isRoundTrip = true;
      }
    });

    this.createFares();
  }

  isRoundTrip: boolean = false;

  fares: any = [];

  totalPrice: number = 0;

  createPassengersInfo() {
    this.passService.getPassengersForm().passengers.forEach((el: any) => {
      let type: string = Object.keys(el)[0].split('-')[0];
      let onePassengers = {
        name: Object.values(el).splice(0, 2).join(' '),
        bag: '1checked bag (total 23 kg) included',
        cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
        seat: '12G',
        type: type,
      };
      this.passengers.push(onePassengers);
    });
  }

  getFlightTime(date: Date) {
    let hour = date.toString().split('T')[1].split(':')[0];
    let minute = date.toString().split('T')[1].split(':')[1];
    return hour + ':' + minute;
  }

  createFares() {
    if (this.isRoundTrip) {
      this.passengers.forEach((el) => {
        let onePerson = {
          type: el.type,
          firstPrice: this.thereFlight.price.eur,
          backPrice: this.backFlight.price.eur,
          totalFlightPrice:
            this.thereFlight.price.eur + this.backFlight.price.eur,
        };
        this.fares.push(onePerson);
        this.totalPrice = this.totalPrice + onePerson.totalFlightPrice;
      });
    } else {
      this.passengers.forEach((el) => {
        let onePerson = {
          type: el.type,
          firstPrice: this.thereFlight.price.eur,
          backPrice: 0,
          totalFlightPrice: this.thereFlight.price.eur + 0,
        };
        this.fares.push(onePerson);
        this.totalPrice = this.totalPrice + onePerson.totalFlightPrice;
      });
    }
  }
}
