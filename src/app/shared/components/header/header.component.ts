import { Component, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService, AuthService, CurrencyService } from '../../../core';
import { LocationService } from 'src/app/core/services/location/location.service';
import { DateTypeService } from 'src/app/core/services/date-type/date-type.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  isOpen$!: BehaviorSubject<boolean>;
  isAuth$!: BehaviorSubject<boolean>;
  firstName$!: BehaviorSubject<
    Partial<(string | (ValidationErrors | null)[])[] | null | undefined>
  >;
  currentPath!: string;
  selectedCurrency!: string;
  typeOfDate!: string;
  currentCurrency: string | undefined =
    this.currencyService.getCurrencyFromLocalStorage();
  currency = ['EUR', 'USD', 'RUB', 'PLN'];

  dateSelectForm = new FormControl('MM/DD/YYYY');
  currencySelectForm!: FormControl;

  constructor(
    private AuthService: AuthService,
    private locationService: LocationService,
    private ApiService: ApiService,
    private dateType$: DateTypeService,
    private currencyService: CurrencyService
  ) {
    this.currencyService.currencySubject.subscribe((el) => {
      this.currentCurrency = el.toUpperCase();
      this.currencySelectForm = new FormControl(
        this.currentCurrency?.toUpperCase()
      );
    });
  }

  ngOnInit(): void {
    this.isOpen$ = this.AuthService.dialogIsOpen$;
    this.isAuth$ = this.AuthService.isAuth$;
    this.firstName$ = this.ApiService.firstName$;

    this.locationService.currentLocation.subscribe(
      (path) => (this.currentPath = path)
    );
    this.selectedCurrency = this.currencySelectForm.value!;
  }

  get dateType() {
    return this.dateSelectForm.value;
  }

  openDialog() {
    this.AuthService.onOpen();
  }

  onLogout() {
    this.AuthService.onLogout();
  }

  checkDate() {
    if (this.dateType) {
      this.dateType$.setDateType(this.dateType);
    }
  }

  onCurrencyChange(currency: string): void {
    this.currencyService.setCurrency(currency.toLowerCase());
  }
}
