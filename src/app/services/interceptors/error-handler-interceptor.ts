import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((e: HttpErrorResponse) => {
        Swal.fire({
          position: 'top-end',
          toast: true,
          heightAuto : true,
          icon: 'error',
          title: 'Sucedio un error',
          text: e.error.mensaje,
          showConfirmButton: false,
          timer: 2500,
        });
        return throwError(e);
      })
    );
  }
}
