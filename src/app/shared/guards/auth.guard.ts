import { CanLoadFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuardMain: CanLoadFn = () => {
  const router = inject(Router);
  const isAuth = inject(AuthService).isAuth();
  console.log('auth guard main');
  if (isAuth) {
    return true;
  }
  router.navigate(['auth']);
  return false;
};

export const authGuard: CanLoadFn = () => {
  const router = inject(Router);
  const isAuth = inject(AuthService).isAuth();
  console.log('auth guard');
  if (!isAuth) {
    return true;
  }
  router.navigate(['']);
  return false;
};
