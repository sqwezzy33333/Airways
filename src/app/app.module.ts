import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent, BookingComponent, HomeComponent, ShopingCartComponent} from './pages/index';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BookingModule } from './pages/booking/booking.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ShopingCartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BookingModule,
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
