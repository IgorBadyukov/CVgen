import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProjectsFormComponent } from '../../../../shared/components/projects-form/projects.form.component';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  setBreadCrumbs,
  setPageTitle,
} from '../../../../store/actions/route.action';
import {
  PROJECT_EDIT_PAGE_TITLE,
  PROJECTS_BREADCRUMBS,
} from '../../constants/breadcrumbs';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProjectsApiService } from '../../../../shared/services/api/projects.api.service';
import { updateProject } from '../../../../store/actions/projects.action';

@UntilDestroy()
@Component({
  selector: 'app-personal-project-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ProjectsFormComponent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './personal-project-page.component.html',
  styleUrl: './personal-project-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalProjectPageComponent implements OnInit {
  public formControl: FormControl;

  private projectID: number | null = null;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private projectApiService: ProjectsApiService,
  ) {
    this.formControl = new FormControl(
      {
        projectName: '',
        startDate: '',
        endDate: '',
        teamSize: null,
        techStack: [],
        description: '',
        responsibilities: [],
        teamRoles: [],
      },
      Validators.required,
    );
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.projectID = Number(params.get('id'));
          return this.projectApiService.getProjectById(this.projectID);
        }),
        untilDestroyed(this),
      )
      .subscribe(project => {
        this.store.dispatch(
          setBreadCrumbs({
            breadcrumbs: [
              PROJECTS_BREADCRUMBS,
              {
                label: project.projectName,
                routerLink: this.projectID.toString(),
              },
            ],
          }),
        );
        this.formControl.setValue({
          projectName: project.projectName,
          startDate: project.startDate,
          endDate: project.endDate,
          teamSize: project.teamSize,
          techStack: project.techStack.map(item => item.name),
          description: project.description,
          responsibilities: project.responsibilities.map(item => item.name),
          teamRoles: project.teamRoles.map(item => item.name),
        });
      });
    this.store.dispatch(
      setPageTitle({
        title: PROJECT_EDIT_PAGE_TITLE,
      }),
    );
  }

  changeProject() {
    if (this.formControl.invalid) {
      this.formControl.markAsTouched();
      return;
    }
    this.store.dispatch(
      updateProject({
        id: this.projectID,
        project: this.formControl.getRawValue(),
      }),
    );
  }
}
