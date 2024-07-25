import { Component } from '@angular/core';
import { StringCalculatorService } from './string-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'string-calculator';
  result!: number | string;

  constructor(private stringCalculatorService: StringCalculatorService) {
    try {
      this.result = this.stringCalculatorService.add("");
      console.log(this.result); 
      this.result = this.stringCalculatorService.add("1");
      console.log(this.result);
      this.result = this.stringCalculatorService.add("1,5");
      console.log(this.result); 
      this.result = this.stringCalculatorService.add("1\n2,3");
      console.log(this.result);
      this.result = this.stringCalculatorService.add("//;\n1;2");
      console.log(this.result); 
      this.result = this.stringCalculatorService.add("1,-2");
      console.log(this.result);
      this.result = this.stringCalculatorService.add("1,-2,-3");
      console.log(this.result);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred.');
      }
    }
  }
}
