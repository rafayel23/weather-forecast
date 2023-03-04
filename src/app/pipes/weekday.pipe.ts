import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekday'
})
export class WeekdayPipe implements PipeTransform {

  transform(value: number, arg?: string): any {
    let stringified: string;
    switch(value){ 
      case 1: stringified = 'Sunday'; break;
      case 2: stringified = 'Monday'; break;
      case 3: stringified = 'Tuesday'; break;
      case 4: stringified = 'Wednesday'; break;
      case 5: stringified = 'Thursday'; break;
      case 6: stringified = 'Friday'; break;
      case 7: stringified = 'Saturday'; break;
    }
    if(arg !== 'full'){
      stringified = stringified.slice(0,3)
    }
    return stringified;
  }

}
