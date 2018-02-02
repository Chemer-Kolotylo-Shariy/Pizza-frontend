import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthAdminGuard implements CanActivate, CanActivateChild{
  constructor(private authService: AuthService, private router: Router) {
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
    console.log(this.authService.isUserLoggenIn() + " ____ " + loggedInUser);
    if (loggedInUser.role === 'ADMIN'){
      return true;
    } else {
      console.log("auth-manager.guard, error canActivateChild, role can not Admin");
      return false;
    }
  }
}
