import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    public productService: ProductService,
    private router: Router
  ) { this.productService.getProuctCount(); }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
