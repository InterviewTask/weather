import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpCacheService {

  cacheLimitTimeOut= 5 * 60 * 1000;
  private cache = new Map<string, { response: HttpResponse<any>, timestamp: number }>();

  put(request: HttpRequest<any>, response: HttpResponse<any>): void {
    this.cache.set(request.urlWithParams, { response, timestamp: Date.now() });
  }

  get(request: HttpRequest<any>): HttpResponse<any> | undefined {
    const cachedItem = this.cache.get(request.urlWithParams);
    if (cachedItem && Date.now() - cachedItem.timestamp < this.cacheLimitTimeOut) {
      return cachedItem.response;
    } else {
      this.cache.delete(request.urlWithParams);
      return undefined;
    }
  }

  clear(): void {
    this.cache.clear();
  }
}
