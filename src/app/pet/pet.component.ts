import { Component } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
  petName: 'Cuns';
  petImage: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  constructor() {
  }

  updateName(name): void {
    this.petName = name;
  }

  updateImage(image): void {
    this.petImage = image;
  }

}
