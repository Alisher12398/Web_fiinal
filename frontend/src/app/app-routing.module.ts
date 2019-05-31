import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {UserProductsListComponent} from './user-products-list/user-products-list.component';
import {MainComponent} from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},

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
