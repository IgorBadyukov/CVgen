import { IHeaderTable } from '../../../shared/interfaces/headerTable';

export const header: IHeaderTable[] = [
  {
    name: 'projectName',
    field: 'projectName',
  },
  {
    name: 'description',
    field: 'description',
  },
  {
    name: 'startDate',
    field: 'startDate',
  },
  {
    name: 'endDate',
    field: 'endDate',
  },
  {
    name: 'teamSize',
    field: 'teamSize',
  },
  {
    name: 'techStack',
    field: 'techStack.name',
  },
  {
    name: 'responsibilities',
    field: 'responsibilities.name',
  },
  {
    name: 'teamRoles',
    field: 'teamRoles.name',
  },
];
