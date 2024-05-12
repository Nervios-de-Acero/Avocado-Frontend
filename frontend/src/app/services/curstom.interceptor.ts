import { HttpInterceptorFn } from '@angular/common/http';

export const curstomInterceptor: HttpInterceptorFn = (req, next) => {

  const myToke = localStorage.getItem('angularToken')
  const cloneRequest = req.clone({
    setHeaders:{
      Authorization:`Bearer ${myToke}`
    }
  } )

  return next(cloneRequest);
};
