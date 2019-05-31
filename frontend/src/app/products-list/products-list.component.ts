import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { IProduct } from '../shared/models';
import { Location } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  public products: IProduct[] = [];

  public productName: string = "";
  public productPrice: number = 0;
  public productQuantity: number = 0;

  constructor(
    private provider: ProviderService,
    private location: Location,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if(this.auth.isAuthenticated){
      this.provider.getProducts().then(res => {
        this.products = res;
      })
    }
  }

}

