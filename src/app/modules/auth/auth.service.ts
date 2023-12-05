import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IToken } from '../../shared/interfaces/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<IToken> {
    return this.http.post<IToken>(
      'http://localhost:3000/api/auth/login/',
      {
        email,
        password,
      },
      { withCredentials: true },
    );
  }

  logout(): Observable<unknown> {
    return this.http.get('http://localhost:3000/api/auth/logout');
  }
}
