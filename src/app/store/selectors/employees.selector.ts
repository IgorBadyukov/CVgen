import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppStateEmployees } from '../state.model';

const selectCommonState =
  createFeatureSelector<IAppStateEmployees>('employees');

export const selectEmployees = createSelector(
  selectCommonState,
  (state: IAppStateEmployees) => state.employees,
);
