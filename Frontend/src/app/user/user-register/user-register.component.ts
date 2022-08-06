import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName : new FormControl('', Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword : new FormControl(null, [Validators.required]),
      phone : new FormControl(null, [Validators.required])
    }, this.passwordMatch);
  }

  passwordMatch(fg: FormGroup): Validators {
    return fg.get('password').value  === fg.get('confirmPassword').value ? null :
    { notMatching : true };
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get phone() {
    return this.registrationForm.get('phone') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm);
  }
}
