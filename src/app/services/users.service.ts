import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get<any>('/clientes');
  }
  
  getClientById(id : number){
    return this.http.get<any>('/clientes/'+id);
  }
}
