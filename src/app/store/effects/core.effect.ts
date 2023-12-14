import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  fetchResponsibilities,
  fetchResponsibilitiesError,
  fetchResponsibilitiesSuccess,
  fetchTeamRoles,
  fetchTeamRolesError,
  fetchTeamRolesSuccess,
  fetchTechStack,
  fetchTechStackError,
  fetchTechStackSuccess,
} from '../actions/core.action';
import { CoreApiService } from '../../shared/services/api/core.api.service';

@Injectable()
export class CoreEffect {
  constructor(
    private action$: Actions,
    private coreApiService: CoreApiService,
  ) {}

  fetchResponsibilities$ = createEffect(() =>
    this.action$.pipe(
      ofType(fetchResponsibilities),
      switchMap(() =>
        this.coreApiService.getResponsibilities().pipe(
          map(responsibilities =>
            fetchResponsibilitiesSuccess({ responsibilities }),
          ),
          catchError(() => of(fetchResponsibilitiesError())),
        ),
      ),
    ),
  );

  fetchTechStack$ = createEffect(() =>
    this.action$.pipe(
      ofType(fetchTechStack),
      switchMap(() =>
        this.coreApiService.getTechStack().pipe(
          map(techStack => fetchTechStackSuccess({ techStack })),
          catchError(() => of(fetchTechStackError())),
        ),
      ),
    ),
  );

  fetchTeamRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(fetchTeamRoles),
      switchMap(() =>
        this.coreApiService.getTeamRoles().pipe(
          map(teamRoles => fetchTeamRolesSuccess({ teamRoles })),
          catchError(() => of(fetchTeamRolesError())),
        ),
      ),
    ),
  );
}
