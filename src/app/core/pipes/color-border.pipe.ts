import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkDateColor',
})
export class CheckFlightColor implements PipeTransform {
  transform(value: Date, array: any): string {
    let color: string = '';
    array.forEach((el: any) => {
      let dayOfFlight = new Date(el.takeoffDate).getDate();
      let currentDate = new Date(value).getDate();
      if (dayOfFlight === currentDate) {
        let max: number = el.seats.total;
        let avaible: number = el.seats.avaible;
        let halfOfMax: number = max / 2;

        if (avaible > halfOfMax) color = 'borderBottomGreen';
        if (avaible <= halfOfMax && avaible > 10) color = ' borderBottomOrange';
        if (avaible <= 10) color = 'borderBottomRed';
      }
    });
    return color;
  }
}
