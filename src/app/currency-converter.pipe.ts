import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvert'
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number): string {
    return `R$ ${value.toFixed(2)}`;
  }
}