export interface IProject {
  id: number;
  projectName: string;
  description: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  techStack: string[];
  responsibilities: string[];
  teamRoles: string[];
}
