import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  allProducts = [
    {
      productId: 'PROD_1',
      productName: 'Apple iPhone X 64GB',
      productCategory: 'Smartphone',
      productPrice: 63999.00,
      productDescription: 'The iPhone X models have a 5.8 (diagonal) widescreen LED-backlit True Tone, wide color (P3) Super Retina with 3D Touch and a 2436x1125 native resolution at 458 ppi',
      productImageUrl: 'https://vlebazaar.in/image/cache/catalog/----imagsweb/ipx-550x550.jpeg',
      productQuatity: 5,
      favourite: false,
      deviceType: 'Apple Mobile',
      addedToCart: false,
      cartCount: 0
    },
    {
      productId: 'PROD_2',
      productName: 'Apple iPhone 11 128GB',
      productCategory: 'Smartphone',
      productPrice: 87049.00,
      productDescription: 'The iPhone 11 models have a 5.8 (diagonal) widescreen LED-backlit True Tone, wide color (P3) Super Retina with 3D Touch and a 2436x1125 native resolution at 458 ppi',
      productImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SX679_.jpg',
      productQuatity: 5,
      favourite: false,
      deviceType: 'Apple Mobile',
      addedToCart: false,
      cartCount: 0
    },
    {
      productId: 'PROD_3',
      productName: 'OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)',
      productCategory: 'Smartphone',
      productPrice: 41999.00,
      productDescription: 'Oxygen OS based on Android v10 operating system with 2.86GHz of clock speed with Qualcomm Snapdragon 865, powered by Kryo 585 CPU octa core processor, Adreno 650 ',
      productImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SX679_.jpg',
      productQuatity: 5,
      favourite: false,
      deviceType: 'Android Mobile',
      addedToCart: false,
      cartCount: 0
    },
    {
      productId: 'PROD_4',
      productName: 'OPPO Reno2 F (Sky White, 8GB RAM, 128GB Storage)',
      productCategory: 'Smartphone',
      productPrice: 21999.00,
      productDescription: '48+8+2+2MP ultra clear rear camera, 8MP (wide angle lens) + 2MP (mono lens) + 2MP (portrait lens) | 16MP front camera',
      productImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71P71LmSAGL._SX679_.jpg',
      productQuatity: 5,
      favourite: false,
      deviceType: 'Android Mobile',
      addedToCart: false,
      cartCount: 0
    },
    {
      productId: 'PROD_5',
      productName: 'Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage)',
      productCategory: 'Laptop',
      productPrice: 199900.00,
      productDescription: 'Ninth-generation 6-core Intel Core i7 processor, Stunning 16-inch Retina display with True Tone technology, Touch Bar and Touch ID',
      productImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX679_.jpg',
      productQuatity: 2,
      favourite: false,
      deviceType: 'Laptop',
      addedToCart: false,
      cartCount: 0
    },
    {
      productId: 'PROD_6',
      productName: 'HP Elitebook X360 1030 G4 13.3-inch Laptop',
      productCategory: 'Laptop',
      productPrice: 195000.00,
      productDescription: '1.8GHz Intel Core i7-8565 8th Gen processor, 16GB LPDDR3 RAM, 13.3-inch screen, Intel UHD 620 Graphics',
      productImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71nFA%2BbtVsL._SX679_.jpg',
      productQuatity: 0,
      favourite: false,
      deviceType: 'Laptop',
      addedToCart: false,
      cartCount: 0
    }
  ];
  favouritProducts = [];
  cartProducts = [];

  getProducts() {
    this.favouritProducts.length = 0;
    this.cartProducts.length = 0;
    this.getProuctCount();
    return this.allProducts;
  }

  createProduct(data) {
    this.allProducts.push(data);
  }



  deleteProduct(product) {
    const index = this.allProducts.indexOf(product);
    if (index > -1) {
      this.allProducts.splice(index, 1);
      this.getProducts();
    }
  }
  addFavouriteProduct(data): void {
    for (let i = 0; i < this.allProducts.length; i++) {
      if (this.allProducts[i].productId === data.productId) {
        this.allProducts[i].favourite = !this.allProducts[i].favourite;
      }
    }
    this.getProducts();
  }
  addToCart(data) {
    for (let i = 0; i < this.allProducts.length; i++) {
      if (this.allProducts[i].productId === data.productId) {
        this.allProducts[i].addedToCart = true;
        if (this.allProducts[i].addedToCart) {
          this.allProducts[i].cartCount += 1;
          this.allProducts[i].productQuatity -= 1;
        }
      }
    }
    this.getProducts();
  }
  getProuctCount() {
    this.allProducts.forEach(product => {
      if (product.favourite) {
        this.favouritProducts.push(product);
      }
      if (product.addedToCart && product.cartCount > 0) {
        this.cartProducts.push(product);
      }
    });
  }
}
