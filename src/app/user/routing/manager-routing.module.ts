import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {ManagerComponent} from "../manager/manager.component";
import {AuthManagerGuard} from "../../shared/guard/auth-manager.guard";
import {UserComponent} from "../user.component";

const routes = [
  {path: '', component: UserComponent, canActivateChild: [ AuthManagerGuard ], children:[
    {path: 'manager', component: ManagerComponent}
  ]}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ManagerRoutingModule{}
