import { ERoutes } from '../../../shared/enums/routes';
import { IBreadCrumbs, IPageTitle } from '../../../shared/interfaces/route';

export const EMPLOYEES_BREADCRUMBS: IBreadCrumbs = {
  label: 'employees',
  routerLink: ERoutes.EMPLOYEES_ROUTE,
};
export const EMPLOYEE_ADD_BREADCRUMBS: IBreadCrumbs = {
  label: 'add',
  routerLink: ERoutes.EMPLOYEES_ROUTE + '/' + ERoutes.ADDING_ROUTE,
};
export const EMPLOYEES_PAGE_TITLE: IPageTitle = {
  pageTitle: 'employees',
  pageSubtitle: 'employeesList',
};
export const EMPLOYEE_ADD_PAGE_TITLE: IPageTitle = {
  pageTitle: 'employees',
  pageSubtitle: 'employeeAdd',
};
