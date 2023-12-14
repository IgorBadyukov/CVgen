import { createAction, props } from '@ngrx/store';
import { IEmployee } from '../../modules/employees/interfaces/employee';

export const fetchEmployees = createAction('[Employees] Fetch Employees');

export const fetchEmployeesSuccess = createAction(
  '[Employees] Fetch Employees Success',
  props<{ employees: IEmployee[] }>(),
);

export const fetchEmployeesError = createAction(
  '[Employees] Fetch Employees Error',
);
