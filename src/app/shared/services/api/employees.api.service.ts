import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../../constants/api';
import { Observable } from 'rxjs';
import { IEmployee } from '../../../modules/employees/interfaces/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${BASE_API_URL}employees`);
  }
}
