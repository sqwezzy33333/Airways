import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-journey',
  templateUrl: './booking-journey.component.html',
  styleUrls: ['./booking-journey.component.scss']
})
export class BookingJourneyComponent {
  public selectedButton: number | null = null ;
  public onButtonClickEvent = new EventEmitter();
  
  onButtonClick(item: number) {
    this.selectedButton = item;
  }
}
