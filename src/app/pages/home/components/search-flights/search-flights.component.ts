import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchFlightsComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.searchForm);
  }

  searchForm = new FormGroup({
    tripType: new FormControl<string>('roundTrip', [Validators.required]),
    from: new FormControl<string>('', [Validators.required]),
    dest: new FormControl<string>('', [Validators.required]),
    date: new FormGroup({
      singleDate: new FormControl<string>('', []),
      startDate: new FormControl<string>(''),
      endDate: new FormControl<string>(''),
    }),
    passengers: new FormGroup({
      adult: new FormControl<number>(0),
      child: new FormControl<number>(0),
      infant: new FormControl<number>(0),
    }),
  });

  passengers = {
    adult: 0,
    child: 0,
    infant: 0,
  };

  isInfoPassSpanOnep = false;

  showPassengersOptions = false;

  isPlaceBlocksReverse = false;

  isOneWay = false;

  dateIsFalse = false;

  namesOfLabels = ['From', 'Destination'];

  exampleArrayOfPlace: Array<[string, string]> = [
    ['Chicago', 'CH'],
    ['Minsk', 'MNSK'],
  ];

  get adult() {
    return this.searchForm.value.passengers?.adult;
  }

  get child() {
    return this.searchForm.value.passengers?.child;
  }

  get infant() {
    return this.searchForm.value.passengers?.infant;
  }

  formSubmit() {
    let formObject = { ...this.searchForm.value };
    if (this.isPlaceBlocksReverse) {
      formObject.from = this.searchForm.value.dest;
      formObject.dest = this.searchForm.value.from;
    }

    if (this.adult || this.child || this.infant) {
      console.log(this.searchForm.valid);
    }
  }

  reversePlaceBlocks() {
    this.namesOfLabels.reverse();

    this.isPlaceBlocksReverse = !this.isPlaceBlocksReverse;
  }

  oneWayIsTrue() {
    this.isOneWay = true;
  }

  oneWayIsFalse() {
    this.isOneWay = false;
  }

  checkDates() {
    let tripType = this.searchForm.get('tripType')?.value;
    let today = new Date();
    let startDate = this.searchForm.controls.date.get('startDate')?.value;
    let singleDate = this.searchForm.controls.date.get('singleDate')?.value;

    if (tripType === 'roundTrip') {
      let isStardDayOlder;
      if (startDate) isStardDayOlder = new Date(startDate);
      if (isStardDayOlder) this.dateIsFalse = today > isStardDayOlder;
    }
    if (tripType === 'oneWay') {
      let isSingleDateOlder;
      if (singleDate) isSingleDateOlder = new Date(singleDate);
      if (isSingleDateOlder) this.dateIsFalse = today > isSingleDateOlder;
    }
  }

  openPassengersOptions() {
    this.showPassengersOptions = true;
    this.isInfoPassSpanOnep = true;
  }

  moreAdult() {
    let count = this.searchForm.controls.passengers.value?.adult;

    if (count) {
      count = count + 1;
      this.passengers.adult = count;
    }

    if (count === 0) {
      count = 1;
      this.passengers.adult = count;
    }

    this.searchForm.controls.passengers.value.adult = count;
  }

  moreChild() {
    let count = this.searchForm.controls.passengers.value?.child;

    if (count) {
      count = count + 1;
      this.passengers.child = count;
    }

    if (count === 0) {
      count = 1;
      this.passengers.child = count;
    }

    this.searchForm.controls.passengers.value.child = count;
  }

  moreInfant() {
    let count = this.searchForm.controls.passengers.value?.infant;

    if (count) {
      count = count + 1;
      this.passengers.infant = count;
    }

    if (count === 0) {
      count = 1;
      this.passengers.infant = count;
    }

    this.searchForm.controls.passengers.value.infant = count;
  }

  lessAdult() {
    let count = this.searchForm.controls.passengers.value?.adult;

    if (count !== 0) {
      if (count) {
        count = count - 1;
        this.passengers.adult = count;
        this.searchForm.controls.passengers.value.adult = count;
      }
    }
  }

  lessChild() {
    let count = this.searchForm.controls.passengers.value?.child;

    if (count !== 0) {
      if (count) {
        count = count - 1;
        this.passengers.child = count;
        this.searchForm.controls.passengers.value.child = count;
      }
    }
  }

  lessInfant() {
    let count = this.searchForm.controls.passengers.value?.infant;

    if (count !== 0) {
      if (count) {
        count = count - 1;
        this.passengers.infant = count;
        this.searchForm.controls.passengers.value.infant = count;
      }
    }
  }

  closeOptions() {
    this.showPassengersOptions = false;
  }

  onewWayDateCheck(control: FormControl<string>) {
    const todayDate = new Date().getTime();
    const videoDate = new Date(control.value).getTime();
    if (videoDate < todayDate) return { dateCheck: true };
    return null;
  }
}
