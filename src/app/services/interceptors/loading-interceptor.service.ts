import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ModalService } from '../modal.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private countRequest = 0;

  constructor(private loadingService: ModalService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (!this.countRequest) {
          this.loadingService.show();
      }
      this.countRequest++;
      
      return next.handle(req).pipe(
          finalize(() => {
              this.countRequest--;
              if (!this.countRequest) {
                 this.loadingService.hide();
              }
          })
      )
  }
}
