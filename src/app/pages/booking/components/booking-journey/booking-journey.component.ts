import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-booking-journey',
  templateUrl: './booking-journey.component.html',
  styleUrls: ['./booking-journey.component.scss']
})
export class BookingJourneyComponent {
  @Output() public openResentSearchEvent = new EventEmitter();
  @Output() public onSelectTripEvent = new EventEmitter();
  
  public selectedDateButtonBack: number | null = null ;
  public selectedDateButtonThere: number | null = null ;
  public onDateButtonClickBackEvent = new EventEmitter();
  public onDateButtonClickThereEvent = new EventEmitter();
  public isTripSelectedThere:boolean = false;
  public isTripSelectedBack:boolean = false;
  
  public onDateButtonClickBack(item: number) {
    this.selectedDateButtonBack = item;
  }
  public onDateButtonClickThere(item: number) {
    this.selectedDateButtonThere = item;
  }

  public onSelectTrip(directionFlights: string) {
    if (directionFlights === 'there') {
      this.isTripSelectedThere = true;
    } else if (directionFlights === 'back') {
      this.isTripSelectedBack = true;
    }
  }

}
