import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    let delimiter = /[\n,]+/;
    if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterIndex));
      numbers = numbers.substring(delimiterIndex + 1);
    }

    const numArray = numbers.split(delimiter).map(num => +num);
    const negativeNumbers = numArray.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    return numArray.reduce((sum, current) => sum + current, 0);
  }
}
