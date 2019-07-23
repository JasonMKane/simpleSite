import { ProductService } from "../../services/product-service";
import { inject } from 'aurelia-framework'

@inject(ProductService)
export class Products {
  constructor(ProductService) {
    this.productService = ProductService
  }

  selectProduct = function (productId) {
    this.currentProduct = this.productService.getProduct(productId)
    console.log(this.currentProduct)
  }
}
