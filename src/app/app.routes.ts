import { Routes } from '@angular/router';
import { ERoutes } from './shared/enums/routes';
import { AuthService } from './shared/services/auth.service';
import { inject } from '@angular/core';

export const ROUTES: Routes = [
  {
    path: ERoutes.MAIN_ROUTE,
    loadChildren: () =>
      import('./modules/core/core.routes').then(m => m.ROUTES_CORE),
    canMatch: [() => inject(AuthService).isAuth()],
  },
  {
    path: ERoutes.AUTH_ROUTE,
    loadChildren: () =>
      import('./modules/auth/auth.routes').then(m => m.ROUTES_AUTH),
    canMatch: [() => !inject(AuthService).isAuth()],
  },
  { path: '**', redirectTo: ERoutes.MAIN_ROUTE },
];
