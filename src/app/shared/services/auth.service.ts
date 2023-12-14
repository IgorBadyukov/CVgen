import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthApiService } from './api/auth.api.service';
import { ERoutes } from '../enums/routes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private cookieService: CookieService,
    private authApiService: AuthApiService,
    private router: Router,
  ) {}

  public login(email: string, password: string): void {
    this.authApiService.login(email, password).subscribe(value => {
      this.cookieService.set('access_token', value.access_token);
      this.router.navigate([ERoutes.MAIN_ROUTE]);
    });
  }

  public logout(): void {
    this.authApiService.logout().subscribe(() => {
      this.cookieService.delete('access_token');
      this.router.navigate([ERoutes.AUTH_ROUTE]);
    });
  }

  public isAuth() {
    const accessToken = this.cookieService.get('access_token');
    return Boolean(accessToken);
  }
}
