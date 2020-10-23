import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Output() data = new EventEmitter();
  addUser: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addUser = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      group: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    console.log(this.addUser);
    this.data.emit(this.addUser.value);
  }


}
