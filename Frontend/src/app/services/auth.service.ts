import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any) {
  let usersArray = [];
  if (localStorage.getItem('Users')) {
    usersArray = JSON.parse(localStorage.getItem('Users'));
  }
  return usersArray.find(u => u.userName === user.userName && u.password === user.password);
}

}
