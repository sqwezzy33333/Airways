import { Injectable } from '@angular/core';
import { FlightsResponse } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
  private selectedCurrency: keyof FlightsResponse['price'] = 'usd';

  constructor() {
    this.selectedCurrency = localStorage.getItem('selectedCurrency')! as keyof FlightsResponse['price'];
  }

  getCurrency(): keyof FlightsResponse['price'] {
    return this.selectedCurrency;
  }

  setCurrency(currency: any): void {
    this.selectedCurrency = currency.toLowerCase();
    console.log('selectedCurrency', this.selectedCurrency)
    localStorage.setItem('selectedCurrency', currency);
  }
}
