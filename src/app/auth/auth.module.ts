import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations:[
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports:[
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule{}
