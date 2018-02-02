import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import {BaseApi} from "../core/base-api";
import {User} from "../models/user.model";

@Injectable()
export class UserService extends BaseApi{

  user: User;

  constructor(http: Http){
    super(http);
  }

  getUserByPhone(phone: number){
    return this.user = new User('Andrii', 'Chemer', 'ichemer@icloud.com', 537778445, '31lanafe', 'CHEF', 1);
  }

  createUser(){}
}
