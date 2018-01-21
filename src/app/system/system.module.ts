import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {SystemRoutingModule} from "./system-routing.module";
import {SystemComponent} from "./system.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {ProductService} from "./shared/services/product.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    ShoppingCartComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent
  ],
  providers: [ProductService]
})
export class SystemModule{}
/**/
