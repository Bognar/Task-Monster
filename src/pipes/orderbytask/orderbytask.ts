import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderbytask',
})
export class OrderbytaskPipe implements PipeTransform {

  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
