import { createReducer, on } from '@ngrx/store';
import { IAppStateEmployees, initialSateEmployees } from '../state.model';
import {
  fetchEmployees,
  fetchEmployeesError,
  fetchEmployeesSuccess,
} from '../actions/employees.action';

export const employeesReducer = createReducer(
  initialSateEmployees,
  on(fetchEmployees, (state: IAppStateEmployees) => ({
    ...state,
    isLoading: true,
  })),
  on(fetchEmployeesSuccess, (state: IAppStateEmployees, { employees }) => ({
    ...state,
    employees,
  })),
  on(fetchEmployeesError, (state: IAppStateEmployees) => ({
    ...state,
    employees: [],
    isLoading: false,
  })),
);
