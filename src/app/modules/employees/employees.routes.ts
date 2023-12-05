import { Routes } from '@angular/router';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { PersonalEmployeePageComponent } from './pages/personal-employee-page/personal-employee-page.component';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { ERoutes } from '../../shared/enums/routes';

export const ROUTES_EMPLOYEES: Routes = [
  { path: ERoutes.EMPTY_ROUTE, component: EmployeesPageComponent },
  { path: ERoutes.ADDING_ROUTE, component: AddEmployeePageComponent },
  { path: ERoutes.ID_ROUTE, component: PersonalEmployeePageComponent },
];
