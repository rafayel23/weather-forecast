import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number): string {

    const tmpElem = document.createElement('span');
    const celsius = '&#x2103;';

    const content = (value > 0) ? ('+' + value + celsius) : (value + celsius);
    tmpElem.innerHTML = content

    return tmpElem.innerHTML
  }

}
