import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser: string;
  constructor() { }

  ngOnInit() {
  }

  loggedIn() {
   this.loggedInUser =  localStorage.getItem('token');
   console.log(this.loggedInUser);
   return this.loggedInUser;
  }

  logout() {
    localStorage.removeItem('token');
  }

}
