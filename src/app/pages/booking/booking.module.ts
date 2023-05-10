import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent, BookingPassengersComponent } from '../../pages/booking/index';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    BookingComponent,
    BookingPassengersComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    BookingComponent,
    BookingPassengersComponent
  ]
})
export class BookingModule { }
