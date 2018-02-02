import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";
import {BaseGuard} from "../core/base.guard";
import {RoleModel} from "../models/role.model";

@Injectable()
export class AuthClientGuard extends BaseGuard{

  constructor(public authService: AuthService, public router: Router, private role: RoleModel) {
    super(authService, router);
    this.setRole(role.roleClient);
  }
}
