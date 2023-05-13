import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, pipe, filter } from 'rxjs';
import { AuthService } from '../../../core';
import { LocationService } from 'src/app/core/services/location/location.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  isOpen$!: BehaviorSubject<boolean>;
  isAuth$!: BehaviorSubject<boolean>;
  firstName$!: BehaviorSubject<string | null | undefined>;
  currentPath!: string;

  constructor(
    private AuthService: AuthService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.isOpen$ = this.AuthService.dialogIsOpen$;
    this.isAuth$ = this.AuthService.isAuth$;
    this.firstName$ = this.AuthService.firstName$;
    this.locationService.currentLocation.subscribe((path)=> this.currentPath = path)
  }

  dateSelectForm = new FormControl('MM/DD/YYYY');
  currencySelectForm = new FormControl('EUR');

  openDialog() {
    this.AuthService.onOpen();
  }

  onLogout() {
    this.AuthService.onLogout();
  }

  checkLocation(){
    console.log(this.currentPath)
    return this.currentPath;
  }
}
