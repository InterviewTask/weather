import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpCacheRequestInterceptor } from "./http-cache-request.interceptor";
import { HttpErrorHandlerInterceptor } from "./http-error-handler.interceptor";

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpCacheRequestInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandlerInterceptor, multi: true }
];
