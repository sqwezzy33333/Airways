import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent, FooterComponent, AuthComponent } from '../shared/index';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AuthComponent
  ],
})
export class SharedModule {}
