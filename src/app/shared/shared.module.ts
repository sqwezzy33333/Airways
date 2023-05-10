import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent, FooterComponent, AuthComponent,
         NotFoundComponent, BookingStepsComponent
       } from '../shared/index';
import { RouterModule } from '@angular/router';

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
