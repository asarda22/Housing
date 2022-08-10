import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  isUserFormSubmitted: boolean ;
  constructor(private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword : [null, [Validators.required]],
      phone : [null, [Validators.required]]
    }, {validators : this.passwordMatch});
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
    this.isUserFormSubmitted = true;
    if (this.registrationForm.valid) {
    // this.user = Object.assign(this.user, this.registrationForm.value);
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    this.isUserFormSubmitted = false;
   // console.log(this.registrationForm);
    alert('Registration successful');
    } else {
      alert('Registration failed. Please check your input');
    }
  }

  userData(): User {
    return this.user = {
        userName: this.userName.value,
        email: this.email.value,
        password: this.password.value,
        phone: this.phone.value
    };
  }

}
