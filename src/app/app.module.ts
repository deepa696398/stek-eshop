import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dummyBackendProvider } from './helpers/dummy-backend';
import { FilterByDeviceTypePipe } from './helpers/pipes/filterByDeviceTypePipe.pipe';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { OurProductListComponent } from './components/our-product-list/our-product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FavouriteProductsComponent } from './components/favourite-products/favourite-products.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { NoProductFoundComponent } from './components/no-product-found/no-product-found.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    OurProductListComponent,
    PageNotFoundComponent,
    FilterByDeviceTypePipe,
    FavouriteProductsComponent,
    MyCartComponent,
    NoProductFoundComponent,
    ProductComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    dummyBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
