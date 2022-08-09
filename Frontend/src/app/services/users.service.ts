import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor() { }

addUser(user) {
  let users = [];
  if (localStorage.getItem('Users')) {
    users = JSON.parse(localStorage.getItem('Users'));
    // spread operator
    users = [user, ...users];
  } else {
    users = [user];
  }
  localStorage.setItem('Users', JSON.stringify(users));
}

}
