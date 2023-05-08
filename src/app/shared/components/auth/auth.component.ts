import {Component, OnInit} from '@angular/core';
import {AuthService, ISignUp, IUser, ICountry} from "../../../core/index";
import {BehaviorSubject} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLogin$!: BehaviorSubject<boolean>;
  textBorder$!: BehaviorSubject<string>;
  citizenship$!: BehaviorSubject<ICountry[]>
  isAuth$!: BehaviorSubject<boolean>
  ngOnInit(): void {
    this.isLogin$ = this.AuthService.isLogin$
    this.textBorder$ = this.AuthService.textBorder$
    this.citizenship$ = this.AuthService.citizenship$
    this.isAuth$ = this.AuthService.isAuth$
  }
  constructor(private AuthService: AuthService, private formBuilder: FormBuilder) {
  }

  account_validation_messages = {
    'firstName': {message: 'Firstname is required', pattern: 'field must contain only letters.' },
    'lastName': {message: 'LastName is required' , pattern: 'field must contain only letters.'},
    'bDay': {message: 'Birth  of day is required' },
    'phone':{message: 'Phone number is required' },
    'citizenship':{message: 'Citizenship is required' },
    'agreement':{message: 'Field is required' },
    'email': {message: 'Email is required', correct: 'Enter a valid email' },
    'password': {message: 'Password is required' },
  }

    formGroupSignUp = this.formBuilder.group<ISignUp>(({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      bDay: ['', [Validators.required]],
      sex: [''],
      countryCode: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      citizenship:['', [Validators.required]],
      agreement: [false, [Validators.required]],
    }))
    formGroupLogin = this.formBuilder.group<IUser>({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    })
  onSwitch(value: boolean){
    this.AuthService.onSwitch(value)
  }
  get email() {
    return this.formGroupSignUp.get('email');
  }
  get password() {
    return this.formGroupSignUp.get('password');
  }
  get firstName() {
    return this.formGroupSignUp.get('firstName');
  }
  get lastName() {
    return this.formGroupSignUp.get('lastName');
  }
  get bDay() {
    return this.formGroupSignUp.get('bDay');
  }
  get sex() {
    return this.formGroupSignUp.get('sex');
  }
  get countryCode() {
    return this.formGroupSignUp.get('countryCode');
  }
  get phone() {
    return this.formGroupSignUp.get('phone');
  }
  get citizenship() {
    return this.formGroupSignUp.get('citizenship');
  }
  get agreement() {
    return this.formGroupSignUp.get('agreement');
  }
  onSubmit() {
    if(this.formGroupSignUp.valid){
      this.AuthService.onSaveToLocalStorage(this.formGroupSignUp.value)
    }
  }
    onSubmitLogin() {
        this.AuthService.onLogin(this.formGroupLogin.value)
  }

}
