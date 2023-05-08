import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent, ShopingCartComponent } from './pages/index';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from "./pages/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ShopingCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HomeModule,
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
