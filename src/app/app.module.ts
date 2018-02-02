import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {SystemModule} from "./system/system.module";
import {UserService} from "./shared/services/user.service";
import {AuthService} from "./shared/services/auth.service";
import {UserModule} from "./user/user.module";
import {AuthAdminGuard} from "./shared/guard/auth-admin.guard";
import {AuthClientGuard} from "./shared/guard/auth-client.guard";
import {AuthChefGuard} from "./shared/guard/auth-chef.guard";
import {AuthManagerGuard} from "./shared/guard/auth-manager.guard";
import {BaseGuard} from "./shared/core/base.guard";
import {RoleModel} from "./shared/models/role.model";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
    SystemModule,
    UserModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthAdminGuard,
    AuthClientGuard,
    AuthChefGuard,
    AuthManagerGuard,
    BaseGuard,
    RoleModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/**/
