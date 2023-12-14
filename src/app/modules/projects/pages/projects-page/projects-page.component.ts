import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsFormComponent } from '../../../../shared/components/projects-form/projects.form.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { IHeaderTable } from '../../../../shared/interfaces/headerTable';
import { Store } from '@ngrx/store';
import {
  setBreadCrumbs,
  setPageTitle,
} from '../../../../store/actions/route.action';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  PROJECTS_BREADCRUMBS,
  PROJECTS_PAGE_TITLE,
} from '../../constants/breadcrumbs';
import { selectProjects } from '../../../../store/selectors/projects.selector';
import { fetchProjects } from '../../../../store/actions/projects.action';
import { header } from '../../constants/headerTable';
import { ERoutes } from '../../../../shared/enums/routes';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsFormComponent,
    TableComponent,
    MatButtonModule,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent implements OnInit {
  protected readonly header: IHeaderTable[] = header;

  public projects$ = this.store.select(selectProjects);

  constructor(
    private store: Store,
    private route: Router,
  ) {}

  ngOnInit() {
    this.store.dispatch(
      setBreadCrumbs({
        breadcrumbs: [PROJECTS_BREADCRUMBS],
      }),
    );
    this.store.dispatch(
      setPageTitle({
        title: PROJECTS_PAGE_TITLE,
      }),
    );
    this.store.dispatch(fetchProjects());
  }

  choseProject(projectID: number) {
    this.route.navigate([
      ERoutes.MAIN_ROUTE + '/' + ERoutes.PROJECTS_ROUTE + '/' + projectID,
    ]);
  }
}
