import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {UserProductsListComponent} from './user-products-list/user-products-list.component';


const routes: Routes = [
  {path: '', component: BaseComponent},

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'user_products', component: UserProductsListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
