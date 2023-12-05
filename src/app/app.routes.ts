import { Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { ERoutes } from './shared/enums/routes';
import { authGuard } from './shared/guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: ERoutes.EMPTY_ROUTE,
    redirectTo: ERoutes.AUTH_ROUTE,
    pathMatch: 'full',
  },
  {
    path: ERoutes.AUTH_ROUTE,
    loadChildren: () =>
      import('./modules/auth/auth.routes').then(m => m.ROUTES_AUTH),
  },
  {
    path: ERoutes.MAIN_ROUTE,
    loadChildren: () =>
      import('./modules/core/core.routes').then(m => m.ROUTES_CORE),
    canActivate: [authGuard],
  },
  { path: ERoutes.ERROR_ROUTE, component: ErrorPageComponent },
];
