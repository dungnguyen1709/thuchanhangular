import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  outPut: number;
  first: number;
  second: number;
  operator = '+';

  onFirstChange(value): void {
    this.first = Number(value);
  }

  onSecondChange(value): void {
    this.second = Number(value);
  }

  onOperator(value): void {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.outPut = this.first + this.second;
        break;
      case '-':
        this.outPut = this.first - this.second;
        break;
      case '*':
        this.outPut = this.first * this.second;
        break;
      case '/':
        this.outPut = this.first / this.second;
        break;
    }
  }
}
