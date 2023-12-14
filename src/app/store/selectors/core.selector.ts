import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppStateCore } from '../state.model';

const selectCommonState = createFeatureSelector<IAppStateCore>('core');

export const selectResponsibilities = createSelector(
  selectCommonState,
  (state: IAppStateCore) => state.responsibilities.map(resp => resp.name),
);

export const selectTechStack = createSelector(
  selectCommonState,
  (state: IAppStateCore) => state.techStack.map(tech => tech.name),
);

export const selectTeamRoles = createSelector(
  selectCommonState,
  (state: IAppStateCore) => state.teamRoles.map(teamRole => teamRole.name),
);
