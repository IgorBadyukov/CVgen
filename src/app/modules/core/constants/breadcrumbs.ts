import { IBreadCrumbs } from '../../../shared/interfaces/route';
import { ERoutes } from '../../../shared/enums/routes';

export const constantBreadcrumbs: IBreadCrumbs[] = [
  { label: 'main', routerLink: ERoutes.EMPLOYEES_ROUTE },
];
