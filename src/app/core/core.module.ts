import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { interceptorProviders } from './interceptors/interceptor-chain';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as Sentry from "@sentry/angular-ivy";
import { Router } from '@angular/router';
import { HttpCacheService } from './services/http-cache.service';
/*============================
  TRANSLATE FACTORY
==============================*/
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage:'en-US',
    })
  ],
  providers: [
    ApiService,
    HttpCacheService,
    TranslateStore,
    interceptorProviders,
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  exports:[TranslateModule]
})
export class CoreModule { }
