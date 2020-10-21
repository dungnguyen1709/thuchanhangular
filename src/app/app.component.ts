import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thuchanhangular';
  text = 'My name is Tobi';
  textSize = 17;
  status = true;

  changeSize(): void {
    this.textSize++;
  }

  changeStatus(): void {
    this.status = !this.status;
  }
}
