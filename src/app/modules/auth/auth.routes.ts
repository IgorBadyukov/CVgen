import { Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page.component';
import { ERoutes } from '../../shared/enums/routes';

export const ROUTES_AUTH: Routes = [
  { path: ERoutes.MAIN_ROUTE, component: AuthPageComponent },
];
