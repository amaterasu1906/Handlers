import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  constructor(private clientes : UsersService) { }

  ngOnInit(): void {
    // this.clientes.getClients().subscribe( response =>{
    //   console.log(response);
      
    // });
    // this.clientes.getClientById(1).subscribe(response =>{
    //   console.log(response);
    // });
  }

}
