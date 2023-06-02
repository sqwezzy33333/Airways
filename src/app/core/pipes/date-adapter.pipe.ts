import { Pipe, PipeTransform } from '@angular/core';
import { DateTypeService } from '../services/date-type/date-type.service';

@Pipe({
  name: 'dateAdapter',
})
export class DateAdapterPipe implements PipeTransform {
  constructor(private dateService: DateTypeService) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    this.dateService.currentDateType.subscribe((el) => {
      let typeString: string = el.split('/').join('-');
      DateTypeService.MY_DATA_FORMATS.parse.dateInput = typeString;
      DateTypeService.MY_DATA_FORMATS.display.dateInput = typeString;

      console.log(DateTypeService.MY_DATA_FORMATS);
    });
    return value;
  }
}
