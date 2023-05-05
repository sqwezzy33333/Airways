import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyDatesComponent } from './journey-dates.component';

describe('JourneyDatesComponent', () => {
  let component: JourneyDatesComponent;
  let fixture: ComponentFixture<JourneyDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
