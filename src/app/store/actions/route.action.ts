import { createAction, props } from '@ngrx/store';
import { IBreadCrumbs, IPageTitle } from '../../shared/interfaces/route';

export const setBreadCrumbs = createAction(
  '[Breadcrumbs] Set Breadcrumbs',
  props<{ breadcrumbs: IBreadCrumbs[] }>(),
);

export const setPageTitle = createAction(
  '[Title] Set title',
  props<{ title: IPageTitle }>(),
);
