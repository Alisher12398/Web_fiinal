import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ClassProvider } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProviderService } from './shared/services/provider.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './AuthInterceptor';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UserProductsListComponent } from './user-products-list/user-products-list.component';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    RegisterComponent,
    ProductsListComponent,
    UserProductsListComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ProviderService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
