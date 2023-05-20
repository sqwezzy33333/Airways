import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private currentIndex = 0;
  public dates: Date[] = [];

  constructor() {
    const storedDates = localStorage.getItem('sliderDates');
    if (storedDates) {
      this.dates = JSON.parse(storedDates);
    }
  }


  public prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.dates.length) % this.dates.length;
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.dates.length;
  }

  public setDates(dates: Date[]): void {
    this.dates = dates;
    localStorage.setItem('sliderDates', JSON.stringify(this.dates));
  }

  public getDates() {
    return this.dates;
  }

  public getCurrentIndex() {
    return this.currentIndex;
  }
}
