import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from '../../../modules/projects/interfaces/project';
import { BASE_API_URL } from '../../constants/api';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${BASE_API_URL}projects`);
  }

  getProjectById(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${BASE_API_URL}projects/${id}`);
  }

  addProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(`${BASE_API_URL}projects`, { ...project });
  }

  updateProject(id: number, project: IProject): Observable<IProject> {
    return this.http.put<IProject>(`${BASE_API_URL}projects/${id}`, {
      ...project,
    });
  }
}
