import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeesApiService } from '../../shared/services/api/employees.api.service';
import {
  fetchEmployees,
  fetchEmployeesError,
  fetchEmployeesSuccess,
} from '../actions/employees.action';

@Injectable()
export class EmployeesEffect {
  constructor(
    private action$: Actions,
    private employeesApiService: EmployeesApiService,
  ) {}

  fetchProjects$ = createEffect(() =>
    this.action$.pipe(
      ofType(fetchEmployees),
      switchMap(() =>
        this.employeesApiService.getAllEmployees().pipe(
          map(employees => fetchEmployeesSuccess({ employees })),
          catchError(() => of(fetchEmployeesError())),
        ),
      ),
    ),
  );
}
