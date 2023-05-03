import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core";
import {BehaviorSubject} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ICountry} from "../../core/models/county.model";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  isLogin$!: BehaviorSubject<boolean>;
  textBorder$!: BehaviorSubject<string>;
  citizenship$!: BehaviorSubject<ICountry[]>

  formGroupSignUp!: FormGroup;
  ngOnInit(): void {
    this.isLogin$ = this.AuthService.isLogin$
    this.textBorder$ = this.AuthService.textBorder$
    this.citizenship$ = this.AuthService.citizenship$
    this.formGroupSignUp = new FormGroup<any>({
      publishedAt: new FormControl('')
    })
  }
  constructor(private AuthService: AuthService) {
  }

  onSwitch(value: boolean){
    this.AuthService.onSwitch(value)
  }



}
