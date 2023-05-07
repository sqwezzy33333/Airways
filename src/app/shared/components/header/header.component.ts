import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AuthService} from "../../../core";
import {MatDialog} from "@angular/material/dialog";
import {AuthComponent} from "../auth/auth.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  isOpen$!: BehaviorSubject<boolean>;
  isAuth$! :BehaviorSubject<boolean>
  firstName$! :BehaviorSubject<string | null | undefined>

  ngOnInit(): void {
    this.isOpen$ = this.AuthService.dialogIsOpen$;
    this.isAuth$ = this.AuthService.isAuth$;
    this.firstName$ = this.AuthService.firstName$;
  }
  constructor(private AuthService: AuthService) {
  }

  dateSelectForm = new FormControl('MM/DD/YYYY');
  currencySelectForm = new FormControl('EUR');

  openDialog() {
    this.AuthService.onOpen()
  }
  onLogout(){
    this.AuthService.onLogout()
  }
}


