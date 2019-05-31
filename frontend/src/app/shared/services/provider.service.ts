import {EventEmitter, Injectable} from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
//import {IContact, IAuthResponse, IContactNew,} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  public sendMessage = new EventEmitter<string>();

  constructor(http: HttpClient) {
    super(http);
  }
  //
  // getTaskLists(): Promise<IContact[]> {
  //   return this.get('http://localhost:8000/api/contacts/', {});
  // }
  //
  // getTaskListDetail(id: number): Promise<IContact> {
  //   return this.get(`http://localhost:8000/api/contacts/${id}/`, {});
  // }
  //
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
