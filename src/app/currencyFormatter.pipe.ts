import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter'
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(value: number): string {
    return `R$ ${value.toFixed(2)}`;
  }
}