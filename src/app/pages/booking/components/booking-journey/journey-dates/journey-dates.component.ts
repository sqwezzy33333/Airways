import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FlightsResponse, SliderService } from 'src/app/core';

@Component({
  selector: 'app-journey-dates',
  templateUrl: './journey-dates.component.html',
  styleUrls: ['./journey-dates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneyDatesComponent {
  @Input() flight!: FlightsResponse;
  @Input() public isSelected: boolean = false;

  @Input() public selectedDateButtonThere: Date | null = null;
  @Input() public selectedDateButtonBack: Date | null = null;

  @Output() public onDateButtonClickThereEvent = new EventEmitter();
  @Output() public onDateButtonClickBackEvent = new EventEmitter();
  @Output() public dateSelectedEvent = new EventEmitter<Date>();

  constructor(private sliderService: SliderService) {}

  public currentIndex = 0;
  flights: any;
  public dates: Date[] = [];
  public monthNames: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  public dayOfWeekNames: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  ngOnInit(): void {
    const storedDates = this.sliderService.getDates();
    if (storedDates) {
      this.dates = storedDates.map((dateString) => new Date(dateString));
    }

    const firstFlights = [this.flight];
    if (this.flight.otherFlights) {
      const otherFlights = Object.values(this.flight.otherFlights);
      this.flights = firstFlights.concat(otherFlights);

      console.log('flights:', this.flights);
    }

    this.currentIndex = this.sliderService.getCurrentIndex();
  }

  public onDateButtonClickThere(item: Date) {
    this.onDateButtonClickThereEvent.emit(item);
  }
  public onDateButtonClickBack(item: Date) {
    this.onDateButtonClickBackEvent.emit(item);
  }

  public nextSlide(): void {
    this.sliderService.nextSlide();
    this.currentIndex = this.sliderService.getCurrentIndex();
  }

  public prevSlide(): void {
    this.sliderService.prevSlide();
    this.currentIndex = this.sliderService.getCurrentIndex();
  }

  public isOpenDate(item: any) {
    return (
      (this.selectedDateButtonThere !== null &&
        this.selectedDateButtonThere.getTime() === item.getTime()) ||
      (this.selectedDateButtonBack !== null &&
        this.selectedDateButtonBack.getTime() === item.getTime())
    );
  }

  public isCheckedDate(item: any): boolean {
    return (
      (this.selectedDateButtonThere !== null &&
        this.selectedDateButtonThere.getTime() === item.getTime()) ||
      (this.selectedDateButtonBack !== null &&
        this.selectedDateButtonBack.getTime() === item.getTime())
    );
  }
}
