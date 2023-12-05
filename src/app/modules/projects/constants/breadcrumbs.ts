import { IBreadCrumbs, IPageTitle } from '../../../shared/interfaces/route';
import { ERoutes } from '../../../shared/enums/routes';

export const PROJECTS_BREADCRUMBS: IBreadCrumbs = {
  label: 'projects',
  routerLink: ERoutes.EMPLOYEES_ROUTE,
};
export const PROJECT_ADD_BREADCRUMBS: IBreadCrumbs = {
  label: 'add',
  routerLink: ERoutes.EMPLOYEES_ROUTE + '/' + ERoutes.ADDING_ROUTE,
};
export const PROJECTS_PAGE_TITLE: IPageTitle = {
  pageTitle: 'projects',
  pageSubtitle: 'projectsList',
};
export const PROJECT_ADD_PAGE_TITLE: IPageTitle = {
  pageTitle: 'projects',
  pageSubtitle: 'projectsAdd',
};
