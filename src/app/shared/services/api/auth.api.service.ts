import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IToken } from '../../interfaces/token';
import { BASE_API_URL } from '../../constants/api';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<IToken> {
    return this.http.post<IToken>(
      `${BASE_API_URL}auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true },
    );
  }

  logout(): Observable<unknown> {
    return this.http.get(`${BASE_API_URL}auth/logout`, {
      withCredentials: true,
    });
  }

  refreshToken(): Observable<IToken> {
    return this.http.get<IToken>(`${BASE_API_URL}auth/refresh`, {
      withCredentials: true,
    });
  }
}
