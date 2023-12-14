import { createAction, props } from '@ngrx/store';
import { IProject } from '../../modules/projects/interfaces/project';

export const fetchProjects = createAction('[Projects] Fetch Projects');

export const fetchProjectsSuccess = createAction(
  '[Projects] Fetch Projects Success',
  props<{ projects: IProject[] }>(),
);

export const fetchProjectsError = createAction(
  '[Projects] Fetch Projects Error',
);

export const addNewProject = createAction(
  '[Projects] Add Project',
  props<{ project: IProject }>(),
);

export const addNewProjectSuccess = createAction(
  '[Projects] Add Project Success',
  props<{ project: IProject }>(),
);

export const addNewProjectError = createAction('[Projects] Add Project Error');

export const updateProject = createAction(
  '[Projects] Update Project',
  props<{ id: number; project: IProject }>(),
);

export const updateProjectSuccess = createAction(
  '[Projects] Update Project Success',
  props<{ project: IProject }>(),
);

export const updateProjectError = createAction(
  '[Projects] Update Project Error',
);
