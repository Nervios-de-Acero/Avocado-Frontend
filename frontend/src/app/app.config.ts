import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding} from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { curstomInterceptor } from './services/curstom.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([curstomInterceptor]))
  ]
};
