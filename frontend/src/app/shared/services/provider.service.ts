import {EventEmitter, Injectable} from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {IProduct, IAuthResponse, IUserProduct,} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  public sendMessage = new EventEmitter<string>();

  constructor(http: HttpClient) {
    super(http);
  }


  getProducts(): Promise<IProduct[]> {
    return this.get('http://localhost:8000/api/products/', {});
  }

  getProductDetail(id: number): Promise<IProduct> {
    return this.get(`http://localhost:8000/api/products/${id}/`, {});
  }

  getUserProducts(): Promise<IUserProduct[]> {
    return this.get('http://localhost:8000/api/user_products/', {});
  }

  getUserProductDetail(id: number): Promise<IUserProduct> {
    return this.get(`http://localhost:8000/api/user_products/${id}/`, {});
  }


  // createContact(name: any, phone: any): Promise<IContact> {
  //   return this.post('http://localhost:8000/api/contacts/', {
  //     name: name,
  //     phone: phone
  //   });
  // }
  //
  // updateContact(contact: IContactNew): Promise<IContactNew> {
  //   return this.put(`http://localhost:8000/api/contacts/${contact.id}/`, {
  //     name: contact.name,
  //     phone: contact.phone
  //   });
  // }
  //
  // deleteContact(id: number): Promise<any> {
  //   return this.delete(`http://localhost:8000/api/contacts/${id}/`, {});
  // }
}
