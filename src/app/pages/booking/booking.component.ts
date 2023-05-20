import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PassengerOption } from '../../core/index';
import { Country } from '../../shared/index';
import { Location } from '@angular/common'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  @Output() public openResentSearchEvent = new EventEmitter();
  @Output() public increasePassengerCountEvent = new EventEmitter();
  @Output() public decreasePassengerCountEvent = new EventEmitter();
  @Output() public getPassengerSummaryEvent = new EventEmitter();

  constructor(private location: Location) {}

  public countries = Country;
  public openStatus: boolean = false;
  public passengerOptions: PassengerOption[] = [
    { label: 'Adults', yearsLimit: '14+', passengerCount: 1 },
    { label: 'Children', yearsLimit: '2-14',passengerCount: 0 },
    { label: 'Infants', yearsLimit: '0-2', passengerCount: 0 }
  ];


  public openResentSearch() {
    this.openStatus = !this.openStatus;
  }

  public increasePassengerCount(passenger: PassengerOption): void {
    passenger.passengerCount++;
  }

  public decreasePassengerCount(passenger: PassengerOption): void {
    if (passenger.passengerCount > 0) {
      passenger.passengerCount--;
    }
  }

  public getPassengerSummary(): string {
    const passengers = this.passengerOptions.filter(option => option.passengerCount > 0);
    const summary = passengers.map(option => `${option.label} ${option.passengerCount}`).join(', ');
    return summary || '';
  } 

  public goBack() {
    this.location.back()
  }

}
