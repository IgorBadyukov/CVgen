import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsFormComponent } from '../../../../shared/components/projects-form/projects.form.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { HeaderMainPageComponent } from '../../components/header-main-page/header-main-page.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsFormComponent,
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
    HeaderComponent,
    HeaderMainPageComponent,
    TranslateModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  public isExpanded: boolean = false;
}
