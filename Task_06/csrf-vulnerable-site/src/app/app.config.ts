import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Todo add XSRF protection
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding())
  ]
};
