import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private currentIndex = 0;
  private dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.dates.length) % this.dates.length;
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.dates.length;
  }

  public getDates() {
    return this.dates;
  }

  getCurrentIndex() {
    return this.currentIndex;
  }
}
