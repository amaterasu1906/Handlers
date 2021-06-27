import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesResolver implements Resolve<any> {

  constructor(private usersService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
      return this.usersService.getClients();
  }
}
