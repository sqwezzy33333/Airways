import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-journey-dates',
  templateUrl: './journey-dates.component.html',
  styleUrls: ['./journey-dates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyDatesComponent {
  @Input() public selectedButton: number | null = null ;
  @Output() public onButtonClickEvent = new EventEmitter();

  onButtonClick(item: number) {
    this.onButtonClickEvent.emit(item);
  }
}
