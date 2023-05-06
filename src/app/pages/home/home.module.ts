import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SearchFlightsComponent } from './components/search-flights/search-flights.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [SearchFlightsComponent, HomeComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HomeComponent],
})
export class HomeModule {}
