import { Component, OnInit } from '@angular/core';
import {ShoppingCartServece} from "../../services/shopping-cart.servece";
import {Cart} from "../../models/cart.model";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo = '../../../../../assets/logo/logo.jpg';
  photoPathStart = '../../../assets/pizza/';
  photoPathEnd = '.png';
  itemsCart: any = [];

  constructor(private cart:ShoppingCartServece) { }

  ngOnInit() {
  }

  loadCart(){
    this.itemsCart = this.cart.loadCart();
  }

  remove(p: Product){
    this.itemsCart = [];
    this.itemsCart = this.cart.remove(p);
  }

}
