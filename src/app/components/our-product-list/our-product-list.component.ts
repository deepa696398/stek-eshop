import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-our-product-list',
  templateUrl: './our-product-list.component.html',
  styleUrls: ['./our-product-list.component.scss'],
})
export class OurProductListComponent implements OnInit {
  productList = [];
  loading = false;
  productType = ['All', 'Apple Mobile', 'Android Mobile', 'Laptop'];

  selectedProduct: 'All';

  page = 1;
  constructor(
    public authenticationService: AuthenticationService,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading = true;
    this.productList = this.productService.getProducts();
  }

  removeProduct(product) {
    this.productService.deleteProduct(product);
  }

  addFavourite(product) {
    this.productService.addFavouriteProduct(product);
  }

  addToCart(product) {
    this.productService.addToCart(product);
  }
  addProduct() {
    this.router.navigate(['/product']);
  }
}

