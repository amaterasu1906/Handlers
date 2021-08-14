import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'AuthorizationLocal': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  })
};
const tokenOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJhdXRob3JpdGllcyI6Ilt7XCJhdXRob3JpdHlcIjpcIlJPTEVfVVNFUlwifV0iLCJzdWIiOiJhbWF0IiwiaWF0IjoxNjI4OTcyNDMyLCJleHAiOjE2Mjg5ODY4MzJ9.bKMvfg3IruHW1ie-sRg38cfZbyWbNaaHqyihkTvTM0lP07Ok9jqQ-xLb6Z1Xog-H'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get<any>('/listar', tokenOptions);
  }
  
  // getClientById(id : number){
  //   return this.http.get<any>('/clientes/'+id, httpOptions);
  // }
}
