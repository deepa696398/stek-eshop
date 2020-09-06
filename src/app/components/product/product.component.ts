import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productDetails: FormGroup;
  submitted = false;
  productData = {
    productId: '',
    productName: '',
    productCategory: '',
    productPrice: '',
    productDescription: '',
    productImageUrl: '',
    productQuatity: '',
    favourite: false,
    deviceType: '',
    addedToCart: false,
    cartCount: 0
  };
  constructor(
    private formBuilder: FormBuilder,
    public productService: ProductService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.productDetails = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.maxLength(50)]],
      productCategory: ['', [Validators.required, Validators.maxLength(50)]],
      productPrice: ['', Validators.required],
      productDescription: ['', Validators.required],
      deviceType: ['', Validators.required],
      productImageUrl: [''],
      productQuatity: ['', [Validators.required]]
    });
  }
  get f() { return this.productDetails.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.productDetails.invalid) {
      return;
    }
    this.productData.productId = 'PROD_AD' + Math.random();
    this.productData.productName = this.productDetails.value.productName;
    this.productData.productCategory = this.productDetails.value.productCategory;
    this.productData.productPrice = this.productDetails.value.productPrice;
    this.productData.productDescription = this.productDetails.value.productDescription;
    this.productData.productImageUrl = this.productDetails.value.productImageUrl;
    this.productData.productQuatity = this.productDetails.value.productQuatity;
    this.productData.deviceType = this.productDetails.value.deviceType === undefined ? 'http://via.placeholder.com/640x360/007bff/ffffff' : this.productDetails.value.deviceType;
    this.productService.createProduct(this.productData);
    setTimeout(() => {
      this.router.navigate(['/all-products']);
    }, 500);
  }
}
