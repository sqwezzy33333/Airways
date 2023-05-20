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
  @Input() public selectedDateButtonThere: number | null = null ;
  @Input() public selectedDateButtonBack: number | null = null ;
  
  @Output() public onDateButtonClickThereEvent = new EventEmitter();
  @Output() public onDateButtonClickBackEvent = new EventEmitter();

  constructor(public sliderService: SliderService) {}
  public currentIndex = 0;
  public dates: number[] = [];

  ngOnInit(): void {
    this.dates = this.sliderService.getDates();
    this.currentIndex = this.sliderService.getCurrentIndex();
  }

  public onDateButtonClickThere(item: number) {
    this.onDateButtonClickThereEvent.emit(item);
  }
  public onDateButtonClickBack(item: number) {
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
