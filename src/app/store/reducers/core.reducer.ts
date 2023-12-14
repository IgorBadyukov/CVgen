import { createReducer, on } from '@ngrx/store';
import { IAppStateCore, initialStateCore } from '../state.model';
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

export const coreReducer = createReducer(
  initialStateCore,
  on(fetchResponsibilities, (state: IAppStateCore) => ({
    ...state,
    isLoading: true,
  })),
  on(
    fetchResponsibilitiesSuccess,
    (state: IAppStateCore, { responsibilities }) => ({
      ...state,
      responsibilities,
    }),
  ),
  on(fetchResponsibilitiesError, (state: IAppStateCore) => ({
    ...state,
    isLoading: false,
  })),
  on(fetchTechStack, (state: IAppStateCore) => ({
    ...state,
    isLoading: true,
  })),
  on(fetchTechStackSuccess, (state: IAppStateCore, { techStack }) => ({
    ...state,
    techStack,
  })),
  on(fetchTechStackError, (state: IAppStateCore) => ({
    ...state,
    isLoading: false,
  })),
  on(fetchTeamRoles, (state: IAppStateCore) => ({
    ...state,
    isLoading: true,
  })),
  on(fetchTeamRolesSuccess, (state: IAppStateCore, { teamRoles }) => ({
    ...state,
    teamRoles,
  })),
  on(fetchTeamRolesError, (state: IAppStateCore) => ({
    ...state,
    isLoading: false,
  })),
);
