import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../../constants/api';
import { Observable } from 'rxjs';
import { ICore } from '../../interfaces/core';

@Injectable({
  providedIn: 'root',
})
export class CoreApiService {
  constructor(private http: HttpClient) {}

  getTeamRoles(): Observable<ICore[]> {
    return this.http.get<ICore[]>(`${BASE_API_URL}team-roles`);
  }

  getResponsibilities(): Observable<ICore[]> {
    return this.http.get<ICore[]>(`${BASE_API_URL}responsibilities`);
  }

  getTechStack(): Observable<ICore[]> {
    return this.http.get<ICore[]>(`${BASE_API_URL}skills`);
  }
}
