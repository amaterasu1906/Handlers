import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  show(){
    Swal.fire('Loading');
    Swal.showLoading();
  }
  hide(){
    Swal.hideLoading();
  }
}
