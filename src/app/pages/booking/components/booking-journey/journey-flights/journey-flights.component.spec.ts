import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyFlightsComponent } from './journey-flights.component';

describe('JourneyFlightsComponent', () => {
  let component: JourneyFlightsComponent;
  let fixture: ComponentFixture<JourneyFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
