import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";

@Injectable()
export class BaseGuard implements CanActivate, CanActivateChild{

  private roleOfUser: string = '';

  constructor(public authService: AuthService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    console.log('Url: ' + url);

    if (this.authService.isUserLoggenIn()){
      return true;
    }
    this.authService.setRedirectUrl(url);
    this.router.navigate([this.authService.getLoginUrl()]);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let loggedInUser = this.authService.getLoggerUser();
    let userFromSessionStory = JSON.parse(sessionStorage.getItem('user'));
    let userFromLocalStory = JSON.parse(localStorage.getItem('user'));
    console.log(this.authService.isUserLoggenIn() + " ____ " + loggedInUser);
    console.log('Role: ' + userFromSessionStory.role);

    if(loggedInUser.role === 'undefined'){
      if(userFromSessionStory.role === this.roleOfUser || userFromLocalStory.role === this.roleOfUser){
        return true;
      }else{
        this.router.navigate(['/home']);
        return false;
      }
      //return userFromSessionStory.role === this.roleOfUser || userFromLocalStory.role === this.roleOfUser;
    } else if(loggedInUser.role === this.roleOfUser){
      return true;
    } else {
      console.log("auth-manager.guard, error canActivateChild, role can not Admin");
      this.router.navigate(['/home']);
      return false;
    }
  }

  setRole(role:string){
    this.roleOfUser = role;
  }

}
