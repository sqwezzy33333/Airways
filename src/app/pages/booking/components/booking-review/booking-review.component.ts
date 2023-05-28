import { Component, OnInit } from '@angular/core';
import { PassengersFormStateService } from 'src/app/core/services/booking-passengers-state/booking-passengers-state.service';
import { FlightsStateService } from 'src/app/core';

@Component({
  selector: 'app-booking-review',
  templateUrl: './booking-review.component.html',
  styleUrls: ['./booking-review.component.scss'],
})
export class BookingReviewComponent implements OnInit {
  passengers: any[] = [];

  constructor(
    private passService: PassengersFormStateService,
    private flightState: FlightsStateService
  ) {}
  ngOnInit(): void {
    this.createPassengersInfo();
    console.log(this.passengers);
  }

  isOneWayTrip = false;

  exampleFares = [
    {
      type: 'Adult',
      fare: 166,
      tax: 91.3,
      total: 228,
    },
    {
      type: 'Child',
      fare: 106,
      tax: 90,
      total: 228,
    },
    {
      type: 'Infant',
      fare: 88,
      tax: 10.3,
      total: 228,
    },
  ];

  totalPrice = 500;

  createPassengersInfo() {
    this.passService.getPassengersForm().passengers.forEach((el: any) => {
      let onePassengers = {
        name: Object.values(el).splice(0, 2).join(' '),
        bag: '1checked bag (total 23 kg) included',
        cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
        seat: '12G',
      };
      this.passengers.push(onePassengers);
    });
  }
}
