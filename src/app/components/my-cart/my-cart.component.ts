import {
  Component, OnInit, OnChanges,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  cartProducts = [];
  showDataNotFound = true;
  totalValue = 0;

  // Not Found Message
  messageTitle = 'No Products Found in Cart';
  messageDescription = 'Please, Add Products to Cart';

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.getCartProduct();
  }

  removeCartProduct(product) {
    for (let i = 0; i < this.productService.allProducts.length; i++) {
      if (product.productId === this.productService.allProducts[i].productId &&
        (this.productService.allProducts[i].addedToCart && this.productService.allProducts[i].cartCount > 0)) {
        this.productService.allProducts[i].cartCount = this.productService.allProducts[i].cartCount - 1;
        if (this.productService.allProducts[i].cartCount === 0) {
          this.productService.allProducts[i].addedToCart = false;
        }
      }
    }
    this.productService.getProducts();
    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.productService.cartProducts;
    this.totalValue = 0;
    for (const product of this.cartProducts) {
      this.totalValue += product.productPrice * product.cartCount;
    }

  }
}

