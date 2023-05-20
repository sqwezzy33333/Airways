import { ChangeDetectionStrategy,
         Component, EventEmitter,
         Input, Output
        } from '@angular/core';
import { SliderService } from 'src/app/core';

@Component({
  selector: 'app-journey-dates',
  templateUrl: './journey-dates.component.html',
  styleUrls: ['./journey-dates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyDatesComponent {
  @Input() public isTripSelectedThere:boolean = false;
  @Input() public isTripSelectedBack:boolean = false;
  @Input() public selectedDateButtonThere: Date | null = null ;
  @Input() public selectedDateButtonBack: Date | null = null ;

  @Output() public onDateButtonClickThereEvent = new EventEmitter();
  @Output() public onDateButtonClickBackEvent = new EventEmitter();

  constructor(public sliderService: SliderService) {}

  public currentIndex = 0;
  public dates: Date[] = [];
  public monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public dayOfWeekNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  ngOnInit(): void {
    const storedDates = this.sliderService.getDates();
    if (storedDates) {
      this.dates = storedDates.map(dateString => new Date(dateString));
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

}
