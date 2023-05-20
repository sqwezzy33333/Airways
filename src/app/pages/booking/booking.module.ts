import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent, BookingPassengersComponent,
         BookingJourneyComponent, JourneyDatesComponent,
         JourneyFlightsComponent, BookingHeaderComponent
        } from '../../pages/booking/index';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SliderService } from 'src/app/core/index';

@NgModule({
  declarations: [
    BookingComponent,
    BookingPassengersComponent,
    BookingJourneyComponent,
    JourneyDatesComponent,
    JourneyFlightsComponent,
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
