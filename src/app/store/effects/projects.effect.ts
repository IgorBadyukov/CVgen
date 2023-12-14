import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProjectsApiService } from '../../shared/services/api/projects.api.service';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  addNewProject,
  addNewProjectError,
  addNewProjectSuccess,
  fetchProjects,
  fetchProjectsError,
  fetchProjectsSuccess,
  updateProject,
  updateProjectError,
  updateProjectSuccess,
} from '../actions/projects.action';
import { Router } from '@angular/router';
import { ERoutes } from '../../shared/enums/routes';

@Injectable()
export class ProjectsEffect {
  constructor(
    private action$: Actions,
    private projectsApiService: ProjectsApiService,
    private router: Router,
  ) {}

  fetchProjects$ = createEffect(() =>
    this.action$.pipe(
      ofType(fetchProjects),
      switchMap(() =>
        this.projectsApiService.getAllProjects().pipe(
          map(projects => fetchProjectsSuccess({ projects })),
          catchError(() => of(fetchProjectsError())),
        ),
      ),
    ),
  );

  addProject$ = createEffect(() =>
    this.action$.pipe(
      ofType(addNewProject),
      map(action => action.project),
      switchMap(projectBody =>
        this.projectsApiService.addProject(projectBody).pipe(
          map(project => {
            this.router.navigate([
              ERoutes.MAIN_ROUTE + '/' + ERoutes.PROJECTS_ROUTE,
            ]);
            return addNewProjectSuccess({ project });
          }),
          catchError(() => of(addNewProjectError())),
        ),
      ),
    ),
  );

  updateProject$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateProject),
      switchMap(item =>
        this.projectsApiService.updateProject(item.id, item.project).pipe(
          map(project => {
            this.router.navigate([
              ERoutes.MAIN_ROUTE + '/' + ERoutes.PROJECTS_ROUTE,
            ]);
            return updateProjectSuccess({ project });
          }),
          catchError(() => of(updateProjectError())),
        ),
      ),
    ),
  );
}
