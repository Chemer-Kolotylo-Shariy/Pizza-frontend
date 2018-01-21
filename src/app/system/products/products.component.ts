import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {Product} from "../shared/models/product.model";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Category} from "../shared/models/category.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  oldProduct: Product[] = [];
  newProduct: any[] = [];

  photoPathStart = '../../../assets/pizza/';
  photoPathEnd = '.png';

  categoryName = '';
  isVisibleDesc = false;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.getCategoryFromAddressLine();
  }

  ngOnInit() {


  }

  onSubmit(form: NgForm){
    var item: Product = form.value;
    console.log(form.value);
  }

  getCategoryFromAddressLine(){
    this.activatedRoute.params.subscribe(params => {
      var categoryName = params['categoryName'];
      this.categoryName = categoryName;
      this.getProductByCategory(categoryName);
    })
  }

  getProductByCategory(category: string){
    this.productService.getProducts(category).subscribe(
      (products: Product[]) => {
        this.products = [];
        this.oldProduct = [];
        this.newProduct = [];
        this.products = products;

        this.products.forEach((e) => {
          this.oldProduct.push(e);
        });


        for(var i = 0; i < this.products.length; i++){
          var mass: Product[] = [];

          for(var j = 0; j < this.oldProduct.length; j++){
            if (this.products[i].name === this.oldProduct[j].name) {

              if (mass.length === 0){
                mass.push(this.oldProduct[j]);
                this.oldProduct[j] = new Product('aaa', 'aaa', -1, 'aaa', -1, 0, new Category(-2, 'bbb', mass), 'aaa', -1, -1,);
                //console.log(mass.length + " !!!!!!!!!!!!!!!!!");
              } else {
                for (var k = 0; k < mass.length; k++){
                  if (mass[k].name === this.oldProduct[j].name) {
                    mass.push(this.oldProduct[j]);
                    this.oldProduct[j] = new Product('aaa', 'aaa', -1, 'aaa', -1, 0, new Category(-2, 'bbb', mass), 'aaa', -1, -1);
                    //console.log(mass.length + " !!!!!!!!!!!!!!!!!");
                  }
                }
              }
            }
          }

          if(mass.length !== 0){
            this.newProduct.push(mass);
            console.log(mass.length + " !!!!!!!!!!!!!!!!!");
          }
        }

        console.log('____________');
        this.newProduct.forEach((e1) => {
          console.log(e1);
        });


        console.log(this.products);
      }, (error) => {
        alert(error);
      }
    )
  }
}
