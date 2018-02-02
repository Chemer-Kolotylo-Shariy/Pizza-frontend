import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {AuthClientGuard} from "../../shared/guard/auth-client.guard";
import {UserComponent} from "../user.component";
import {ClientComponent} from "../client/client.component";

const routes = [
  {path: '', component: UserComponent, canActivateChild: [ AuthClientGuard ], children:[
    {path: 'client', component: ClientComponent},
  ]}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ClientRoutingModule{}
