import {Injectable} from "@angular/core";
import {User} from "../models/user.model";
@Injectable()
export class AuthService{

  private redirectUrl: string = '/';
  private loginUrl: string = '/login';
  private isAuthenticated = false;
  private loggedInUser: User = new User('name', 'surname', 'test@test.com', 123, '000', 'undefined', -1);

  login(user: User){
    if (user){
      this.loggedInUser = user;
      console.log(user);
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  logout(){
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  isUserLoggenIn(){
    return this.isAuthenticated;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string): void{
    this.redirectUrl = url;
  }

  getLoginUrl(): string {
    return this.loginUrl;
  }

  getLoggerUser(): User{
    return this.loggedInUser;
  }
}
