import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {Message} from "../../shared/models/message.model";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/user.model";
import {AuthService} from "../../shared/services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;
  user: User;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'phone': new FormControl(null, [Validators.required, Validators.minLength(9)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'remember': new FormControl(null),
    })
  }

  private showMessage(message: Message){
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 3000)
  }


  onSubmit(){
    const formData = this.form.value;
    console.log(formData);
    this.user = this.userService.getUserByPhone(formData.phone);
    console.log(this.user);
    if (this.user){

      if (this.user.password === formData.password){
        console.log(true);
        window.localStorage.setItem('user', JSON.stringify(this.user));
        this.authService.login(this.user);
        if (this.user.role === 'ADMIN'){
          this.router.navigate(['/user', 'admin']);
        } else if(this.user.role === 'CHEF') {
          this.router.navigate(['/user', 'chef']);
        } else if(this.user.role === 'CLIENT'){
          this.router.navigate(['/user', 'client']);
        } else if(this.user.role === 'MANAGER'){
          this.router.navigate(['/user', 'manager']);
        } else {
          this.router.navigate(['/home']);
        }
      } else {
        console.log(false);
        this.showMessage({type: 'danger', text: 'Password incorrect.'});
      }
    } else {
      this.showMessage({type: 'danger', text: 'User does not exist.'});
    }
  }


  // onSubmit(){
  //   const formData = this.form.value;
  //   this.userService.getUserByPhone(formData.phone)
  //     .subscsubscribe((user: User) => {
  //     if (user){
  //       if (user.password === formData.password){
  //         window.localStorage.setItem('user', JSON.stringify(user));
  //         this.authService.login();
  //         if (user.role === 'ADMIN'){
  //           this.router.navigate(['/home']);
  //         } else {
  //           this.router.navigate(['/home']);
  //         }
  //       } else {
  //         this.showMessage({type: 'danger', text: 'Password incorrect.'});
  //       }
  //     } else {
  //       this.showMessage({type: 'danger', text: 'User does not exist.'});
  //     }
  //     })
  // }

}
