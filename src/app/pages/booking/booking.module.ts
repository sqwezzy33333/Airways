import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingJourneyComponent } from './components/booking-journey/booking-journey.component';
import { JourneyDatesComponent } from './components/booking-journey/journey-dates/journey-dates.component';



@NgModule({
  declarations: [
    BookingComponent,
    BookingJourneyComponent,
    JourneyDatesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookingComponent,
    BookingJourneyComponent
  ]
})
export class BookingModule { }
