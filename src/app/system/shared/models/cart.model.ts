import {Product} from "./product.model";
import {ElementCart} from "./elementCart.model";

export class Cart{
  constructor(public totalPrice: number,
              public prodCart: ElementCart[]){}
}
