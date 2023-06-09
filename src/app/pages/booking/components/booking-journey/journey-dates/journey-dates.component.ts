import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  FlightsResponse,
  SliderService,
  SearchFlightsStateService,
  DateWithPrice,
  FlightAvailabilityService,
} from 'src/app/core';
import { ISearchFlightsForm } from 'src/app/core';
import { Currency } from 'src/app/core';

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

  @Input() public dates: DateWithPrice[] = [];
  @Input() public currencyType: string = '';

  public currentIndex = 0;
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
  public firstTicketIndex!: number;
  public wasNoFirstTicketCheked = false;
  private searchForm!: ISearchFlightsForm;

  constructor(
    private sliderService: SliderService,
    private flightAvailabilityService: FlightAvailabilityService,
    private searchFormService: SearchFlightsStateService
  ) {}

  ngOnInit(): void {
    const form: ISearchFlightsForm | null =
      this.searchFormService.getSearchFlightsForm();
    if (form) this.searchForm = form;
    this.getFirstTicket();
    this.checkIndexOfSlider();
  }

  get flightType() {
    return this.searchForm.tripType;
  }
  get singleDate() {
    return this.searchForm.date.singleDate;
  }
  get startDate() {
    return this.searchForm.date.startDate;
  }
  get endDate() {
    return this.searchForm.date.endDate;
  }

  private checkIndexOfSlider() {
    if (this.flightType === 'oneWay') {
      if (this.singleDate) this.setSliderIndex(this.singleDate);
      return;
    }
    if (this.flight.form.key === this.searchForm.from?.key) {
      if (this.startDate) this.setSliderIndex(this.startDate);
    } else {
      if (this.endDate) this.setSliderIndex(this.endDate);
    }
  }

  public onDateButtonClickThere(item: Date) {
    this.wasNoFirstTicketCheked = true;
    this.onDateButtonClickThereEvent.emit(item);
  }

  public onDateButtonClickBack(item: Date) {
    this.wasNoFirstTicketCheked = true;
    this.onDateButtonClickBackEvent.emit(item);
  }

  public nextSlide(): void {
    if (this.currentIndex === this.dates.length - 5) return;
    this.currentIndex++;
    this.sliderService.setIndex(this.firstTicketIndex);
  }

  public prevSlide(): void {
    if (this.currentIndex === 0) return;
    this.currentIndex--;
    this.sliderService.setIndex(this.firstTicketIndex);
  }

  public isCheckedDate(item: any): boolean {
    return (
      (this.selectedDateButtonThere !== null &&
        this.selectedDateButtonThere.getDate() === item.getDate()) ||
      (this.selectedDateButtonBack !== null &&
        this.selectedDateButtonBack.getDate() === item.getDate())
    );
  }

  public onClickThere(item: DateWithPrice) {
    if (this.selectedDateButtonThere) {
      this.checkTicketThere(item.price);
    }
  }

  public onClickBack(item: DateWithPrice) {
    if (this.selectedDateButtonBack) {
      this.checkTicketBack(item.price);
    }
  }

  public checkTicketThere(price: number | undefined): void {
    if (price) {
      this.flightAvailabilityService.updateThereFlightsAvailable(true);
    } else {
      this.flightAvailabilityService.updateThereFlightsAvailable(false);
    }
  }

  public checkTicketBack(price: number | undefined): void {
    if (price !== undefined) {
      this.flightAvailabilityService.updateBackFlightsAvailable(true);
    } else {
      this.flightAvailabilityService.updateBackFlightsAvailable(false);
    }
  }

  public changeCurrency(item: any) {
    if (item) {
      return item[this.currencyType];
    }
  }

  getFirstTicket() {
    let indexesOfTickets: number[] = this.dates
      .map((el, index) => {
        if (el.price) {
          return index;
        }
        return 0;
      })
      .filter((el) => {
        return el;
      });

    this.firstTicketIndex = indexesOfTickets[0];
  }

  setSliderIndex(dateStr: string | undefined) {
    if (dateStr) {
      let date: Date = new Date(dateStr);
      let index: number = 0;
      this.dates.forEach((el, i) => {
        if (el.date.getDate() === date.getDate()) {
          index = i;
        }
      });
      this.currentIndex = index - 2;
    }
  }
}
