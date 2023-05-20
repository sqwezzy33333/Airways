import { ChangeDetectionStrategy,
         Component, EventEmitter,
         Input, Output
        } from '@angular/core';

@Component({
  selector: 'app-journey-flights',
  templateUrl: './journey-flights.component.html',
  styleUrls: ['./journey-flights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyFlightsComponent {
  @Input() public isTripSelectedThere:boolean = false;
  @Input() public isTripSelectedBack:boolean = false;
  @Output() public onSelectTripEvent = new EventEmitter();
 

  public onSelectTrip() {
    this.onSelectTripEvent.emit();
  }
}
