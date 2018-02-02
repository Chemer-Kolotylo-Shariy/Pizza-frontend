import {Injectable} from "@angular/core";

@Injectable()
export class RoleModel{
  private _roleAdmin = 'ADMIN';
  private _roleManager = 'MANAGER';
  private _roleChef = 'CHEF';
  private _roleCourier = 'COURIER';
  private _roleClient = 'CLIENT';


  get roleAdmin(): string {
    return this._roleAdmin;
  }

  get roleManager(): string {
    return this._roleManager;
  }

  get roleChef(): string {
    return this._roleChef;
  }

  get roleCourier(): string {
    return this._roleCourier;
  }

  get roleClient(): string {
    return this._roleClient;
  }
}
