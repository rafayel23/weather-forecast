import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prependZero'
})
export class PrependZeroPipe implements PipeTransform {

  transform(value: number): string {

    if(typeof value !== 'number'){
      return value;
    }

    if(value < 10){
      return '0' + value;
    }else{
      return value.toString();
    }

  }
}