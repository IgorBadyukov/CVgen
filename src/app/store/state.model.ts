import { IBreadCrumbs, IPageTitle } from '../shared/interfaces/route';

export interface AppState {
  route: IAppStateRoute;
}

export interface IAppStateRoute {
  breadcrumbs: IBreadCrumbs[];
  title: IPageTitle | null;
}
export const initialStateRoute: IAppStateRoute = {
  breadcrumbs: [],
  title: null,
};
