import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InputComponent } from '../input/input.component';
import { InputDatePickerComponent } from '../input-date-picker/input-date-picker.component';
import { InputChipsComponent } from '../input-chips/input-chips.component';
import { TextAreaComponent } from '../text-area/text-area.component';
import { dateRangeValidator, dateValidator } from '../../utils/dateValidator';

@Component({
  selector: 'app-projects-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    InputComponent,
    InputDatePickerComponent,
    InputChipsComponent,
    TextAreaComponent,
  ],
  templateUrl: './projects.form.component.html',
  styleUrl: './projects.form.component.scss',
})
export class ProjectsFormComponent {
  public techStack: string[] = [
    'Angular',
    'React',
    'Vue',
    'Node.js',
    'Express',
    'MongoDB',
  ];

  public selectedTechStack: string[] = ['Angular'];

  public roles: string[] = [
    'Frontend developer',
    'Backend developer',
    'DevOps',
    'Manager HR',
    'Testing',
  ];

  public selectedRoles: string[] = [];

  public responsibilities: string[] = ['Resp1', 'Resp2', 'Resp3'];

  public selectedResponsibilities: string[] = [];

  public projectForm: FormGroup;

  constructor() {
    this.projectForm = new FormGroup(
      {
        projectName: new FormControl<string>('', [Validators.required]),
        startDate: new FormControl<string>('', [
          Validators.required,
          dateValidator(),
        ]),
        endDate: new FormControl<string>('', [
          Validators.required,
          dateValidator(),
        ]),
        teamSize: new FormControl<number | null>(null, [
          Validators.required,
          Validators.min(0),
          Validators.pattern(/^\d+$/),
        ]),
        techStack: new FormControl<string[]>(this.selectedTechStack, [
          Validators.required,
        ]),
        roles: new FormControl<string[]>(this.selectedRoles, [
          Validators.required,
        ]),
        responsibilities: new FormControl<string[]>(
          this.selectedResponsibilities,
          [Validators.required],
        ),
        description: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(250),
        ]),
      },
      {
        validators: [dateRangeValidator('startDate', 'endDate')],
      },
    );
    this.projectForm.valueChanges.subscribe(console.log);
  }
}
