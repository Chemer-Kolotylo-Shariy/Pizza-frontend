import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoad = false;

  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    this.isLoad = false;
  }

  onRegister(){
    this.isLoad = true;
  }



}
