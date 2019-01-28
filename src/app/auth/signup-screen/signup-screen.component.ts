import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.sass']
})
export class SignupScreenComponent implements OnInit {
  singupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.singupForm = new FormGroup({
      names: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit () {
    if (this.singupForm.valid) {
      const { names, lastname, email, password } = this.singupForm.value;
      const user = new User(names, lastname, email, password);
      console.log(user);
    }
  }

}
