import { ProductService } from "../../services/product-service";
import { inject } from 'aurelia-framework'

@inject(ProductService)
export class Subproducts {
  constructor(ProductService) {
    this.productService = ProductService
  }

  activate(params) {
    console.log(params);
    this.params = params;
  }

  selectProduct = function (productId) {
    this.currentProduct = this.productService.getProduct(productId)
    console.log(this.currentProduct)
  }
}
