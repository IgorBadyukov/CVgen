import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ERoutes } from '../../shared/enums/routes';

export const ROUTES_CORE: Routes = [
  {
    path: ERoutes.EMPTY_ROUTE,
    component: MainPageComponent,
    children: [
      {
        path: ERoutes.EMPTY_ROUTE,
        redirectTo: ERoutes.EMPLOYEES_ROUTE,
        pathMatch: 'full',
      },
      {
        path: ERoutes.EMPLOYEES_ROUTE,
        loadChildren: () =>
          import('../employees/employees.routes').then(m => m.ROUTES_EMPLOYEES),
      },
      {
        path: ERoutes.PROJECTS_ROUTE,
        loadChildren: () =>
          import('../projects/projects.routes').then(m => m.ROUTES_PROJECTS),
      },
    ],
  },
];
