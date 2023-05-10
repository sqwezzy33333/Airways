import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingJourneyComponent } from './booking-journey.component';

describe('BookingJourneyComponent', () => {
  let component: BookingJourneyComponent;
  let fixture: ComponentFixture<BookingJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
