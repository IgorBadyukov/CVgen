import { createAction, props } from '@ngrx/store';
import { ICore } from '../../shared/interfaces/core';

export const fetchResponsibilities = createAction(
  '[Responsibilities] Fetch Responsibilities',
);

export const fetchResponsibilitiesSuccess = createAction(
  '[Responsibilities] Fetch Responsibilities Success',
  props<{ responsibilities: ICore[] }>(),
);

export const fetchResponsibilitiesError = createAction(
  '[Responsibilities] Fetch Responsibilities Error',
);

export const fetchTechStack = createAction('[TechStack] Fetch TechStack');

export const fetchTechStackSuccess = createAction(
  '[TechStack] Fetch TechStack Success',
  props<{ techStack: ICore[] }>(),
);

export const fetchTechStackError = createAction(
  '[TechStack] Fetch TechStack Error',
);

export const fetchTeamRoles = createAction(
  '[Responsibilities] Fetch Responsibilities',
);

export const fetchTeamRolesSuccess = createAction(
  '[TeamRoles] Fetch TeamRoles Success',
  props<{ teamRoles: ICore[] }>(),
);

export const fetchTeamRolesError = createAction(
  '[TeamRoles] Fetch TeamRoles Error',
);
