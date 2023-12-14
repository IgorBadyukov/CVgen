import { IProject } from '../../modules/projects/interfaces/project';

export interface ICV {
  id: number;
  cvName: string;
  language: [
    {
      id: 0;
      nameId: 0;
      levelId: 0;
    },
  ];
  skills: [
    {
      id: number;
      name: string;
    },
  ];
  firstName: string;
  lastName: string;
  email: string;
  department: {
    id: number;
    name: string;
  };
  specialization: {
    id: number;
    name: string;
  };
  departmentId: number;
  specializationId: number;
  employeeId: number;
  cvsProjects: IProject[];
}
