import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Country} from "../../../shared/data/country";
import {ICountry} from "../../models/county.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  borderLineLogin ='or log in with your email'
  borderLineSignup = 'or sign up with your email'
  public dialogIsOpen$: BehaviorSubject<boolean>;
  public isLogin$: BehaviorSubject<boolean>;
  textBorder$ : BehaviorSubject<string>;
  citizenship$ : BehaviorSubject<ICountry[]>;
  constructor() {
    this.dialogIsOpen$ = new BehaviorSubject<boolean>(false)
    this.isLogin$ = new BehaviorSubject<boolean>(true)
    this.textBorder$ = new BehaviorSubject<string>(this.borderLineLogin)
    this.citizenship$ = new BehaviorSubject<ICountry[]>(Country)
  }

  toOpen(){
    this.dialogIsOpen$.next(this.dialogIsOpen$.value ? false : true)
  }
  onSwitch(value: boolean){
    this.isLogin$.next(value)
    if(value){
      this.textBorder$.next(this.borderLineLogin)
    } else {
      this.textBorder$.next(this.borderLineSignup)
    }
  }
}
