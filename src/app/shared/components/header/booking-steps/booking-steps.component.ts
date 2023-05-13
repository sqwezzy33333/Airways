import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-steps',
  templateUrl: './booking-steps.component.html',
  styleUrls: ['./booking-steps.component.scss'],
})
export class BookingStepsComponent {
  @Input() public currentPath!: string;
}
