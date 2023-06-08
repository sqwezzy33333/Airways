import { Injectable } from '@angular/core';
import { FlightsResponse } from '../../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  public currencySubject = new BehaviorSubject<string>('USD');

  currencyFromLocalStroage: string | null =
    localStorage.getItem('selectedCurrency');

  constructor() {
    if (this.currencyFromLocalStroage) {
      this.currencySubject.next(this.currencyFromLocalStroage);
    }
  }

  setCurrency(currency: any): void {
    this.currencySubject.next(currency);

    localStorage.setItem('selectedCurrency', currency);


  }

  getCurrencyFromLocalStorage(){
    return localStorage.getItem('selectedCurrency')?.toLowerCase()
  }
}
