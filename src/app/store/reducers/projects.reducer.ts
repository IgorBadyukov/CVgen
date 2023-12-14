import { createReducer, on } from '@ngrx/store';
import { IAppStateProjects, initialSateProjects } from '../state.model';
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

export const projectsReducer = createReducer(
  initialSateProjects,
  on(fetchProjects, (state: IAppStateProjects) => ({
    ...state,
    isLoading: true,
  })),
  on(fetchProjectsSuccess, (state: IAppStateProjects, { projects }) => ({
    ...state,
    projects,
  })),
  on(fetchProjectsError, (state: IAppStateProjects) => ({
    ...state,
    projects: [],
    isLoading: false,
  })),
  on(addNewProject, (state: IAppStateProjects, { project }) => ({
    ...state,
    isLoading: true,
  })),
  on(addNewProjectSuccess, (state: IAppStateProjects, { project }) => ({
    ...state,
    projects: state.projects.concat(state.projects, project),
    isLoading: false,
  })),
  on(addNewProjectError, (state: IAppStateProjects) => ({
    ...state,
    isLoading: false,
  })),
  on(updateProject, (state: IAppStateProjects, { id, project }) => ({
    ...state,
    isLoading: true,
  })),
  on(updateProjectSuccess, (state: IAppStateProjects, { project }) => {
    const updatedProjects = state.projects.map(projectItem => {
      if (projectItem.id === project.id) {
        return { ...projectItem, ...project };
      }
      return projectItem;
    });
    return {
      ...state,
      projects: updatedProjects,
      isLoading: false,
    };
  }),
  on(updateProjectError, (state: IAppStateProjects) => ({
    ...state,
    isLoading: false,
  })),
);
