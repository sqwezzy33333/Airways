import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent, FooterComponent, AuthComponent } from '../shared/index';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BookingStepsComponent } from './components/header/booking-steps/booking-steps/booking-steps.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    BookingStepsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AuthComponent
  ],
})
export class SharedModule {}
