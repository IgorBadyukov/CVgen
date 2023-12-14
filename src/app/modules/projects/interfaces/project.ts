export interface IProject {
  id: number;
  projectName: string;
  description: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  techStack: { id: number; name: string }[];
  responsibilities: { id: number; name: string }[];
  teamRoles: { id: number; name: string }[];
}
