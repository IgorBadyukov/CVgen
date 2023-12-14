import { ICV } from '../../../shared/interfaces/cv';

export interface IEmployee {
  id: number;
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
  cvs: ICV[];
}
