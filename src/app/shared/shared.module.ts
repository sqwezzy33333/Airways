import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {AuthComponent} from "./components/auth/auth.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AuthComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, AuthComponent],
})
export class SharedModule {}
