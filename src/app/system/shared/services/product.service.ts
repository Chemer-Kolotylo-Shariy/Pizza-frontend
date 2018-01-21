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

  addProduct(product: Product): Observable<Product>{
    return this.post('', product);
  }

  getProducts(categoryName: string): Observable<Product[]>{
    return this.getWithParams(`products/${categoryName}`, categoryName);
  }

  updateProduct(id: number): Observable<Product>{
    return this.put();
  }

}
