import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Error');
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.status === 401) {
          // redirect to login page
        } else if (error.status === 403) {
          // show "access denied" message
        } else if (error.status === 404) {
          // show "not found" message
        } else {
          // show generic error message
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          console.error(errorMessage);
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
