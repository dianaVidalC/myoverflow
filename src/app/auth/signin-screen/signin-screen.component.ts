import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-screen',
  templateUrl: './signin-screen.component.html',
  styleUrls: ['./signin-screen.component.sass']
})
export class SigninScreenComponent implements OnInit {
  singinForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.singinForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit () {
    if (!this.singinForm.valid) {
      const {email, password } = this.singinForm.value;
    }
  }

}
