import {Category} from "./category.model";

export  class Product{
  constructor(public name: string,
              public specification: string,
              public amount: number,
              public photo: string,
              public price: number,
              public persent: number,
              public category: Category,
              public size: string,
              public priceWithPersent: number,
              public id?: number,) {
  }
}
