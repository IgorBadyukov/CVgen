import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ELanguage } from '../../enums/language';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    private translateService: TranslateService,
    private authService: AuthService,
  ) {}

  public switchLanguage(): void {
    const currentLanguage = this.translateService.currentLang;
    const newLanguage =
      currentLanguage === ELanguage.ENGLISH_LANGUAGE
        ? ELanguage.RUSSIAN_LANGUAGE
        : ELanguage.ENGLISH_LANGUAGE;
    this.translateService.use(newLanguage);
  }

  public logout(): void {
    this.authService.logout();
  }
}
