import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
// import {MomentDateModule}

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';
import { BookingStepsComponent } from './components/header/booking-steps/booking-steps/booking-steps.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    BookingStepsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, AuthComponent],
})
export class SharedModule {}
