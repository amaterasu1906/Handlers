import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private clientes : UsersService) { }

  ngOnInit(): void {
    this.viewUser(12);
  }
  viewUser(id: number){
    this.clientes.getClientById(id).subscribe(response =>{
      console.log(response);
    });
  }
}
