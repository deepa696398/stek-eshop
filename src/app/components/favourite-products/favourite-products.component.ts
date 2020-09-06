import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-favourite-products',
  templateUrl: './favourite-products.component.html',
  styleUrls: ['./favourite-products.component.scss']
})
export class FavouriteProductsComponent implements OnInit {

  favouriteProductList = [];
  loading = false;
  page = 1;
  messageTitle = 'No Favourite Products Found';
  messageDescription = 'Please, choose your favourite products';
  constructor(
    public authenticationService: AuthenticationService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts() {
    this.loading = true;
    this.favouriteProductList = this.productService.favouritProducts;
  }
  RemoveFavourite(product) {
    this.productService.addFavouriteProduct(product);
  }

}
