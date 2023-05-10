import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopingCartComponent } from './pages/index';
import { NotFoundComponent } from './shared/index';

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
  {
    path:'**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
