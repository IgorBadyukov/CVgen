import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ELanguage } from '../../../shared/enums/language';
import { InputComponent } from '../../../shared/components/input/input.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ERoutes } from '../../../shared/enums/routes';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-auth',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    InputComponent,
  ],
  providers: [AuthService, TranslateService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  public authForm: FormGroup;

  constructor(
    private authService: AuthService,
    private translateService: TranslateService,
    private cookieService: CookieService,
    private router: Router,
  ) {
    this.authForm = new FormGroup({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  switchLanguage() {
    const currentLanguage = this.translateService.currentLang;
    const newLanguage =
      currentLanguage === ELanguage.ENGLISH_LANGUAGE
        ? ELanguage.RUSSIAN_LANGUAGE
        : ELanguage.ENGLISH_LANGUAGE;
    this.translateService.use(newLanguage);
  }

  submit($event: Event): void {
    $event.preventDefault();
    if (!this.authForm.invalid) {
      this.authService
        .login(
          this.authForm.get('email').value,
          this.authForm.get('password').value,
        )
        .pipe(untilDestroyed(this))
        .subscribe(value => {
          this.cookieService.set('access_token', value.access_token);
          this.router.navigate([ERoutes.MAIN_ROUTE]);
        });
    }
  }
}
