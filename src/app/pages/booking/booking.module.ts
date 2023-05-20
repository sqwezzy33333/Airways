import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent, BookingPassengersComponent,
         BookingJourneyComponent, JourneyDatesComponent,
         JourneyFlightsComponent, BookingHeaderComponent
        } from '../../pages/booking/index';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { BookingReviewComponent } from './components/booking-review/booking-review.component';
import { ReviewPassengersInfoComponent } from './components/booking-review/review-passengers-info/review-passengers-info.component';
import { ReviewFareComponent } from './components/booking-review/review-fare/review-fare.component';
import { SliderService } from 'src/app/core/index';

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
    BookingHeaderComponent,
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
    BookingHeaderComponent,
  ],
  providers: [
    SliderService
  ]
})
export class BookingModule {}
