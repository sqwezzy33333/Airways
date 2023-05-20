import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-review',
  templateUrl: './booking-review.component.html',
  styleUrls: ['./booking-review.component.scss'],
})
export class BookingReviewComponent {
  isOneWayTrip = false;
  examplePassengers = [
    {
      name: 'Harry Potter',
      bag: '1checked bag (total 23 kg) included',
      cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
      seat: '19E',
    },
    {
      name: 'LiLi Potter',
      bag: '1checked bag (total 23 kg) included',
      cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
      seat: '20E',
    },
    {
      name: 'James Potter',
      bag: '1checked bag (total 23 kg) included',
      cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
      seat: '',
    },
  ];

  exampleFares = [
    {
      type: 'Adult',
      fare: 166,
      tax: 91.3,
      total: 228
    },
    {
      type: 'Child',
      fare: 106,
      tax: 90,
      total: 228
    },
    {
      type: 'Infant',
      fare: 88,
      tax: 10.3,
      total: 228
    },
  ];

  totalPrice = 500;
}
