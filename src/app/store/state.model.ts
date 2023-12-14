import { IBreadCrumbs, IPageTitle } from '../shared/interfaces/route';
import { IProject } from '../modules/projects/interfaces/project';
import { IEmployee } from '../modules/employees/interfaces/employee';
import { ICore } from '../shared/interfaces/core';

export interface AppState {
  route: IAppStateRoute;
  projects: IAppStateProjects;
  employees: IAppStateEmployees;
  core: IAppStateCore;
}

export interface IAppStateRoute {
  breadcrumbs: IBreadCrumbs[];
  title: IPageTitle | null;
}

export interface IAppStateProjects {
  projects: IProject[];
  isLoading: boolean;
}

export interface IAppStateEmployees {
  employees: IEmployee[];
  isLoading: boolean;
}

export interface IAppStateCore {
  techStack: ICore[];
  responsibilities: ICore[];
  teamRoles: ICore[];
  isLoading: boolean;
}

export const initialStateRoute: IAppStateRoute = {
  breadcrumbs: [],
  title: null,
};

export const initialSateProjects: IAppStateProjects = {
  projects: [],
  isLoading: false,
};

export const initialSateEmployees: IAppStateEmployees = {
  employees: [],
  isLoading: false,
};

export const initialStateCore: IAppStateCore = {
  techStack: [],
  responsibilities: [],
  teamRoles: [],
  isLoading: false,
};
