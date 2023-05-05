import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingJourneyComponent } from './components/booking-journey/booking-journey.component';
import { JourneyDatesComponent } from './components/booking-journey/journey-dates/journey-dates.component';
import { JourneyFlightsComponent } from './components/booking-journey/journey-flights/journey-flights.component';



@NgModule({
  declarations: [
    BookingComponent,
    BookingJourneyComponent,
    JourneyDatesComponent,
    JourneyFlightsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookingComponent,
  ]
})
export class BookingModule { }
