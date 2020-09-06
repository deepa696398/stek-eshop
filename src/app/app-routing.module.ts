import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OurProductListComponent } from './components/our-product-list/our-product-list.component';
import { FavouriteProductsComponent } from './components/favourite-products/favourite-products.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './helpers/auth.guard';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
  { path: '', component: OurProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'all-products', component: OurProductListComponent },
  { path: 'favourite-products', component: FavouriteProductsComponent, canActivate: [AuthGuard] },
  { path: 'my-cart', component: MyCartComponent, canActivate: [AuthGuard] },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'checkouts', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
