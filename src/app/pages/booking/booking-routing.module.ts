import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent, BookingPassengersComponent } from '../../pages/index';

const routes: Routes = [
  {
    path: '', component: BookingComponent,
    children: [
      // { path: 'flights', component: BookingJoyrneyComponent },
      { path: 'passengers', component: BookingPassengersComponent },
      // { path: 'review-payment', component: BookingReviewPaymentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
