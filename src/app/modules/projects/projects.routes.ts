import { Routes } from '@angular/router';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PersonalProjectPageComponent } from './pages/personal-project-page/personal-project-page.component';
import { AddProjectPageComponent } from './pages/add-project-page/add-project-page.component';

export const ROUTES_PROJECTS: Routes = [
  { path: '', component: ProjectsPageComponent },
  { path: 'add', component: AddProjectPageComponent },
  { path: ':id', component: PersonalProjectPageComponent },
];
