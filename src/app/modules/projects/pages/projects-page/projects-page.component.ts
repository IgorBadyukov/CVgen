import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsFormComponent } from '../../../../shared/components/projects-form/projects.form.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { IProject } from '../../interfaces/project';
import { MatButtonModule } from '@angular/material/button';
import { IHeaderTable } from '../../../../shared/interfaces/headerTable';
import { Store } from '@ngrx/store';
import {
  setBreadCrumbs,
  setPageTitle,
} from '../../../../store/actions/route.action';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  PROJECTS_BREADCRUMBS,
  PROJECTS_PAGE_TITLE,
} from '../../constants/breadcrumbs';

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
  public header: IHeaderTable[] = [
    {
      name: 'projectName',
      field: 'projectName',
    },
    {
      name: 'description',
      field: 'description',
    },
    {
      name: 'startDate',
      field: 'startDate',
    },
    {
      name: 'endDate',
      field: 'endDate',
    },
    {
      name: 'teamSize',
      field: 'teamSize',
    },
    {
      name: 'techStack',
      field: 'techStack',
    },
    {
      name: 'responsibilities',
      field: 'responsibilities',
    },
    {
      name: 'teamRoles',
      field: 'teamRoles',
    },
  ];

  public projects: IProject[] = [
    {
      id: 1,
      projectName: 'CVgen',
      description:
        'This project designed for better working and makeing specific cv for future project',
      startDate: '05/12/2023',
      endDate: '12/12/2023',
      teamSize: 3,
      techStack: ['Angular', 'NestJS'],
      responsibilities: ['Frontend', 'Backend'],
      teamRoles: ['Programmers', 'Manager'],
    },
    {
      id: 2,
      projectName: 'CVgen',
      description: 'something...........vef',
      startDate: '05/12/2023',
      endDate: '12/12/2023',
      teamSize: 3,
      techStack: ['Angular', 'NestJS'],
      responsibilities: ['Frontend', 'Backend'],
      teamRoles: ['Programmers', 'Manager'],
    },
  ];

  constructor(private store: Store) {}

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
  }
}
