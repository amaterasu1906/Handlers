import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.scss']
})
export class ResolverComponent implements OnInit {

  constructor(private route: ActivatedRoute, private modal : ModalService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    
    let info = this.route.snapshot.data.resolver;
    console.log("Informacion del resolver: ");
    console.log(info);
    this.modal.closeModal();
  }
}
