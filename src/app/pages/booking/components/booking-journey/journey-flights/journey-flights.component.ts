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
  @Input() public isSelected: boolean = false;
  @Output() public onSelectTripEvent = new EventEmitter();

  public flights: FlightsResponse[] = [];

  constructor() {}

  ngOnInit(): void {
    const firstFlights = [this.flight];
    const otherFlights = Object.values(this.flight.otherFlights);
    this.flights = firstFlights.concat(otherFlights);

    console.log('flight:', this.flight);
  }

  selectedFlightIndex: number | null = null;

  public onSelectTrip(flight: FlightsResponse) {
    this.onSelectTripEvent.emit(flight);

    const selectedIndex = this.selectedFlightIndex;
    const clickedIndex = this.flights.indexOf(flight);

    if (selectedIndex === clickedIndex) {
      this.selectedFlightIndex = null;
    } else {
      this.selectedFlightIndex = clickedIndex;
    }
  }

  public formatTime(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
  
    return `${hours}h ${minutes}m`;
  }
}
