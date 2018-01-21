import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {SystemModule} from "./system/system.module";

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
    SystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/**/
