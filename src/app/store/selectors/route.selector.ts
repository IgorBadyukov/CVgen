import { IAppStateRoute } from '../state.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const selectCommonState = createFeatureSelector<IAppStateRoute>('route');

export const selectBreadCrumbs = createSelector(
  selectCommonState,
  (state: IAppStateRoute) => state.breadcrumbs,
);

export const selectPageTitle = createSelector(
  selectCommonState,
  (state: IAppStateRoute) => state.title,
);
