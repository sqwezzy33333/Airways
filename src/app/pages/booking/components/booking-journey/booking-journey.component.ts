import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-booking-journey',
  templateUrl: './booking-journey.component.html',
  styleUrls: ['./booking-journey.component.scss']
})
export class BookingJourneyComponent {
  @Output() public openResentSearchEvent = new EventEmitter();
  @Output() public onSelectTripEvent = new EventEmitter();
  
  public selectedDateButton: number | null = null ;
  public onDateButtonClickEvent = new EventEmitter();
  public isTripSelectedThere:boolean = false;
  public isTripSelectedBack:boolean = false;
  
  public onDateButtonClick(item: number) {
    this.selectedDateButton = item;
  }

  public onSelectTrip(componentName: string) {
    if(componentName === 'there') {
      this.isTripSelectedThere = true;
    } else if (componentName === 'back') {
      this.isTripSelectedBack = true;
    }
  }

}
