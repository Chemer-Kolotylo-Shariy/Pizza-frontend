import {Injectable} from "@angular/core";
import {BaseApi} from "../../../shared/core/base-api";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Product} from "../models/product.model";

@Injectable()
export class ProductService extends BaseApi{
  constructor(public http: Http){
    super(http);
  }

  helpert(){
    return [
      new Product('Margarita', 'sos, ser, cebula, kiełbasa wiejska, boczek', 100, 'pizzamargarita', 155, 0, {id: 2, category: "PIZZA", products: null}, 'SIZE_L', 12, 8 ),
      new Product('Margarita', 'sos, ser, cebula, kiełbasa wiejska, boczek', 100, 'pizzamargarita', 155, 0, {id: 2, category: "PIZZA", products: null}, 'SIZE_s', 10, 7 ),
      new Product('Margarita', 'sos, ser, cebula, kiełbasa wiejska, boczek', 100, 'pizzamargarita', 155, 0, {id: 2, category: "PIZZA", products: null}, 'SIZE_m', 11, 6 ),
    ];
  }

  addProduct(product: Product): Observable<Product>{
    return this.post('', product);
  }

  // getProducts(categoryName: string): Observable<Product[]>{
  //   return this.getWithParams(`products/${categoryName}`, categoryName);
  // }

  getProducts(categoryName: string){
    return this.helpert();
  }


  updateProduct(id: number): Observable<Product>{
    return this.put();
  }

}
