import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {AdminComponent} from "../admin/admin.component";
import {UserComponent} from "../user.component";
import {AuthAdminGuard} from "../../shared/guard/auth-admin.guard";

const routes = [
  {path: '', component: UserComponent, canActivateChild: [ AuthAdminGuard ], children:[
    {path: 'admin', component: AdminComponent, }
  ]}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule{}
