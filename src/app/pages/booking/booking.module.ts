import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent, BookingPassengersComponent } from '../../pages/booking/index';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { BookingJourneyComponent } from './components/booking-journey/booking-journey.component';
import { JourneyDatesComponent } from './components/booking-journey/journey-dates/journey-dates.component';
import { JourneyFlightsComponent } from './components/booking-journey/journey-flights/journey-flights.component';
import { BookingReviewComponent } from './components/booking-review/booking-review.component';
import { ReviewPassengersInfoComponent } from './components/booking-review/review-passengers-info/review-passengers-info.component';
import { ReviewFareComponent } from './components/booking-review/review-fare/review-fare.component';


@NgModule({
  declarations: [
    BookingComponent,
    BookingPassengersComponent,
    BookingJourneyComponent,
    JourneyDatesComponent,
    JourneyFlightsComponent,
    BookingReviewComponent,
    ReviewPassengersInfoComponent,
    ReviewFareComponent,
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    BookingComponent,
    BookingPassengersComponent,
    BookingJourneyComponent,
    JourneyDatesComponent,
    JourneyFlightsComponent,
  ]
})
export class BookingModule { }
