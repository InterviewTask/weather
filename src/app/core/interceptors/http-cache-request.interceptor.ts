import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { HttpCacheService } from '../services/http-cache.service';

@Injectable()
export class HttpCacheRequestInterceptor implements HttpInterceptor {
  constructor(private cache: HttpCacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const cachedResponse = this.cache.get(request);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cache.put(request, event);
        }
      })
    );
  }
}
