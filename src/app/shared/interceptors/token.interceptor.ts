import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthApiService } from '../services/api/auth.api.service';

const handle401Error = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authApiService: AuthApiService,
  cookieService: CookieService,
) => {
  return authApiService.refreshToken().pipe(
    switchMap(token => {
      cookieService.delete('access_token');
      cookieService.set('access_token', token.access_token);
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token.access_token}`,
        },
      });
      return next(req);
    }),
  );
};

export const tokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const cookie = inject(CookieService);
  const authApiService = inject(AuthApiService);
  const token = cookie.get('access_token');
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        return handle401Error(req, next, authApiService, cookie);
      } else {
        return throwError(error);
      }
    }),
  );
};
