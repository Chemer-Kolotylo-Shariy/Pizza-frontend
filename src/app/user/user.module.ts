import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ChefComponent} from "./chef/chef.component";
import {ManagerComponent} from "./manager/manager.component";
import {AdminComponent} from "./admin/admin.component";
import {ClientComponent} from "./client/client.component";
import {UserComponent} from "./user.component";
import {AdminRoutingModule} from "./routing/admin-routing.module";
import {ChefRoutingModule} from "./routing/chef-routing.module";
import {ClientRoutingModule} from "./routing/client-routing.module";
import {ManagerRoutingModule} from "./routing/manager-routing.module";

@NgModule({
  imports:[
    CommonModule,
    AdminRoutingModule,
    ChefRoutingModule,
    ClientRoutingModule,
    ManagerRoutingModule
  ],
  declarations:[
    UserComponent,
    ClientComponent,
    AdminComponent,
    ManagerComponent,
    ChefComponent,
  ],
  providers:[

  ]
})
export class UserModule{}
