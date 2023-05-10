import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopingCartComponent } from './pages/shoping-cart/index';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: 'home', 
    loadChildren:() => import('./pages/home/home.module')
    .then((m) => m.HomeModule)
  },
  {
    path: 'booking',
    loadChildren:() => import('./pages/booking/booking.module')
    .then((m) => m.BookingModule)
  },
  {
    path: 'cart', component: ShopingCartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
