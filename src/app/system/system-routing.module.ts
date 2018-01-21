import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SystemComponent} from "./system.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

const routes = [
  {path: '', component: SystemComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'product', component: ProductsComponent},
    {path: 'cart', component: ShoppingCartComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule{}
