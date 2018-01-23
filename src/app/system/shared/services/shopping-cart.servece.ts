import {Injectable} from "@angular/core";
import {Cart} from "../models/cart.model";
import {Product} from "../models/product.model";
import {ElementCart} from "../models/elementCart.model";

@Injectable()
export class ShoppingCartServece{

  cart: Cart;

  constructor(){}

  loadCart(){
    var totalPrice = 0.0;
    var items: ElementCart[] = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart != null){
      for (var i = 0; i < cart.length; i++){
        let item = JSON.parse(cart[i]);
        items.push({
          product: item.product,
          quantity: item.quantity
        });
        totalPrice += item.product.priceWithPersent * item.quantity;
      }
    }
    console.log(totalPrice);
    return {totalPrice, items};
  }

  remove(p: Product){
    var id: number = p.id;
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for(var i = 0; i < cart.length; i++){
      let item = JSON.parse(cart[i]);
      if (item.product.id == id){
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return this.loadCart();
  }

  addToCart(p: Product){
    console.log('name: ' + p.name);
    console.log('1');
    if (p !== undefined){
      console.log('2');


          var item: ElementCart = {
            product: p,
            quantity: 1
          };
          if (localStorage.getItem('cart') == null){
            console.log('true');
            let cart: any = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart))
          } else {
            console.log('false');
            let cart: any = JSON.parse(localStorage.getItem('cart'));
            let index: number = -1;
            for(var j = 0; j < cart.length; j++){
              let item: ElementCart = JSON.parse(cart[j]);
              console.log(item);
              if (item.product.id === p.id){
                console.log(item.product.id === p.id);
                index = j;
                break;
              }
            }
            if (index == -1) {
              cart.push(JSON.stringify(item));
              localStorage.setItem('cart', JSON.stringify(cart));
            } else {
              console.log(index);
              let item: ElementCart = JSON.parse(cart[index]);
              item.quantity += 1;
              cart[index]= JSON.stringify(item);
              localStorage.setItem('cart', JSON.stringify(cart));
            }
          }

    }
    //return this.loadCart();
  }
}
