import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent, BookingComponent, HomeComponent, ShopingCartComponent} from './pages/index';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {MaterialModule} from "./material/material.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BookingComponent,
    HomeComponent,
    ShopingCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
