import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  setBreadCrumbs,
  setPageTitle,
} from '../../../../store/actions/route.action';
import {
  PROJECT_ADD_BREADCRUMBS,
  PROJECT_ADD_PAGE_TITLE,
  PROJECTS_BREADCRUMBS,
} from '../../constants/breadcrumbs';
import { ProjectsFormComponent } from '../../../../shared/components/projects-form/projects.form.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { addNewProject } from '../../../../store/actions/projects.action';

@UntilDestroy()
@Component({
  selector: 'app-add-project-page',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsFormComponent,
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './add-project-page.component.html',
  styleUrl: './add-project-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProjectPageComponent implements OnInit {
  public formControl: FormControl;

  constructor(private store: Store) {
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

  ngOnInit(): void {
    this.store.dispatch(
      setBreadCrumbs({
        breadcrumbs: [PROJECTS_BREADCRUMBS, PROJECT_ADD_BREADCRUMBS],
      }),
    );
    this.store.dispatch(
      setPageTitle({
        title: PROJECT_ADD_PAGE_TITLE,
      }),
    );
  }

  addProject(): void {
    if (this.formControl.invalid) {
      this.formControl.markAsTouched();
      return;
    }
    this.store.dispatch(addNewProject(this.formControl.getRawValue()));
  }
}
