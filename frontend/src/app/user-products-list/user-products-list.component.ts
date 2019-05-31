import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import {IProduct, IUserProduct} from '../shared/models';
import { Location } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './user-products-list.component.html',
  styleUrls: ['./user-products-list.component.css']
})
export class UserProductsListComponent implements OnInit {


  public user_products: IUserProduct[] = [];
  public user_products_list_products: IProduct[] = [];
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
      this.provider.getUserProducts().then(res => {
        this.user_products = res;
      })
    }
  }

}

