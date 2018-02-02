import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {ChefComponent} from "../chef/chef.component";
import {UserComponent} from "../user.component";
import {AuthChefGuard} from "../../shared/guard/auth-chef.guard";

const routes = [
  {path: '', component: UserComponent, canActivateChild: [ AuthChefGuard ], children:[
    {path: 'chef', component: ChefComponent}
  ]}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ChefRoutingModule{}
