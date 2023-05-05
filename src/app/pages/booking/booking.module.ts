import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingJourneyComponent } from './components/booking-journey/booking-journey.component';



@NgModule({
  declarations: [
    BookingComponent,
    BookingJourneyComponent,
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
