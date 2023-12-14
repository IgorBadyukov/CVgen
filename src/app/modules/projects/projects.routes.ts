import { Routes } from '@angular/router';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PersonalProjectPageComponent } from './pages/personal-project-page/personal-project-page.component';
import { AddProjectPageComponent } from './pages/add-project-page/add-project-page.component';
import { ERoutes } from '../../shared/enums/routes';

export const ROUTES_PROJECTS: Routes = [
  { path: ERoutes.MAIN_ROUTE, component: ProjectsPageComponent },
  { path: ERoutes.ADDING_ROUTE, component: AddProjectPageComponent },
  { path: ERoutes.ID_ROUTE, component: PersonalProjectPageComponent },
];
