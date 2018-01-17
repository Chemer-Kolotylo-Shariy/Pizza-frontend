import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { SystemComponent } from './system/system.component';
import { ShoppingCartComponent } from './system/shopping-cart/shopping-cart.component';
import { HomeComponent } from './system/home/home.component';
import { ProductsComponent } from './system/products/products.component';
import { NavbarComponent } from './system/shared/components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    SystemComponent,
    ShoppingCartComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
