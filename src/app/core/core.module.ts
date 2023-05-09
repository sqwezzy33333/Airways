import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService, ApiInterceptor } from '../core/index';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  providers: [
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
