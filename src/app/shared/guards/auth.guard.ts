import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ERoutes } from '../enums/routes';

export const authGuard: CanActivateFn = () => {
  const cookie = inject(CookieService);
  const router = inject(Router);
  const accessToken = cookie.get('access_token');

  if (accessToken) {
    return true;
  } else {
    router.navigate([ERoutes.AUTH_ROUTE]);
    return false;
  }
};
