import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppStateProjects } from '../state.model';

const selectCommonState = createFeatureSelector<IAppStateProjects>('projects');

export const selectProjects = createSelector(
  selectCommonState,
  (state: IAppStateProjects) => state.projects,
);
