import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
// import {MomentDateModule}

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchFlightsComponent } from '../pages/home/components/search-flights/search-flights.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchFlightsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchFlightsComponent,
  ],
})
export class SharedModule {}
