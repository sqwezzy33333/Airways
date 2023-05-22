import { ChangeDetectionStrategy,
         Component, EventEmitter,
         Input, Output, OnInit
        } from '@angular/core';
import { FlightsResponse} from "../../../../../core/index";

@Component({
  selector: 'app-journey-flights',
  templateUrl: './journey-flights.component.html',
  styleUrls: ['./journey-flights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyFlightsComponent implements  OnInit{
  @Input() flight!:FlightsResponse
  @Input() public isTripSelectedThere:boolean = false;
  @Input() public isTripSelectedBack:boolean = false;
  @Output() public onSelectTripEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('flights:', this.flight);
    console.log('otherFlights:', this.flight.otherFlights);
  }

  public onSelectTrip() {
    this.onSelectTripEvent.emit();
  }

  public formatTime(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
  
    return `${hours}h ${minutes}m`;
  }
}
