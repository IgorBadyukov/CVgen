import { createReducer, on } from '@ngrx/store';
import { IAppStateRoute, initialStateRoute } from '../state.model';
import { setBreadCrumbs, setPageTitle } from '../actions/route.action';

export const routeReducer = createReducer(
  initialStateRoute,
  on(setBreadCrumbs, (state: IAppStateRoute, { breadcrumbs }) => ({
    ...state,
    breadcrumbs,
  })),
  on(setPageTitle, (state: IAppStateRoute, { title }) => ({
    ...state,
    title,
  })),
);
