import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AuthService} from "../../../core";
import {MatDialog} from "@angular/material/dialog";
import {AuthComponent} from "../../../pages";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  isOpen$!: BehaviorSubject<boolean>;

  ngOnInit(): void {
    this.isOpen$ = this.AuthService.dialogIsOpen$;
    console.log(this.dateSelectForm);
  }
  constructor(private AuthService: AuthService, public dialog: MatDialog) {
  }

  dateSelectForm = new FormControl('MM/DD/YYYY');
  currencySelectForm = new FormControl('EUR');

  openDialog() {
    const dialogRef = this.dialog.open(AuthComponent, {
      width:"494px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.AuthService.isLogin$.next(true)
    });
    this.AuthService.toOpen()
  }
}
