import { ChangeDetectionStrategy,
         Component, EventEmitter,
         Input, Output
        } from '@angular/core';

@Component({
  selector: 'app-journey-dates',
  templateUrl: './journey-dates.component.html',
  styleUrls: ['./journey-dates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyDatesComponent {
  @Input() public isTripSelectedThere:boolean = false;
  @Input() public isTripSelectedBack:boolean = false;
  @Input() public selectedDateButton: number | null = null ;
  @Output() public onDateButtonClickEvent = new EventEmitter();

  public onDateButtonClick(item: number) {
    this.onDateButtonClickEvent.emit(item);
  }
}
