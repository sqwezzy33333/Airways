import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  value = 'Clear me';

  passArrayOfString: string[] = [];

  step1Obj = {
    tripType: 'roundTrip',
    from: {
      country: 'Andorra',
      calling_code: 376,
    },
    dest: {
      country: 'Algeria',
      calling_code: 213,
    },
    date: {
      singleDate: '',
      startDate: '2023-05-15T21:00:00.000Z',
      endDate: '2023-05-22T21:00:00.000Z',
    },
    passengers: {
      adult: 2,
      child: 1,
      infant: 1,
    },
  };

  passengers = Object.entries(this.step1Obj.passengers);

  ngOnInit(): void {
    this.transformPass();
    this.createForm();
    console.log(this.arrayForms);
  }

  constructor() {}

  arrayForms: any[] = [];

  transformPass() {
    this.passengers.forEach((el) => {
      if (el[1] !== 0) {
        while (el[1] > 0) {
          this.passArrayOfString.push(el[0]);
          el[1]--;
        }
      }
    });
  }

  createForm() {
    let allForms: any = {};
    this.passArrayOfString.forEach((el, index) => {
      let itemArray = [];
      let item: string = el + (index + 1);
      let spanText: string = index + 1 + '. ' + this.capitalizeFirstLetter(el);

      allForms = new FormGroup({
        [item + 'FirstName']: new FormControl<string>('', Validators.required),
        [item + 'LastName']: new FormControl<string>('', Validators.required),
        [item + 'Gender']: new FormControl<string>('', Validators.required),
        [item + 'BirthdayDate']: new FormControl<string>(
          '',
          Validators.required
        ),
      });
      let keys = Object.keys(allForms.controls);
      itemArray.push(spanText, allForms, keys, '');
      this.arrayForms.push(itemArray);
    });
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  submitForm() {
    console.log(this.arrayForms);
  }

}
