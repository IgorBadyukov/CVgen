import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  FormsModule,
  NgControl,
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
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { dateValidatorMax } from '../../utils/dateValidatorMax';
import { dateValidatorMin } from '../../utils/dateValidatorMin';
import { distinctUntilChanged, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  fetchResponsibilities,
  fetchTeamRoles,
  fetchTechStack,
} from '../../../store/actions/core.action';
import {
  selectResponsibilities,
  selectTeamRoles,
  selectTechStack,
} from '../../../store/selectors/core.selector';

@UntilDestroy()
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
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './projects.form.component.html',
  styleUrl: './projects.form.component.scss',
})
export class ProjectsFormComponent
  implements ControlValueAccessor, OnInit, DoCheck
{
  public teamRoles$: Observable<string[]> = this.store.select(selectTeamRoles);

  public responsibilities$: Observable<string[]> = this.store.select(
    selectResponsibilities,
  );

  public techStack$: Observable<string[]> = this.store.select(selectTechStack);

  public form: FormGroup;

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    public readonly cdRef: ChangeDetectorRef,
    private store: Store,
  ) {
    this.ngControl.valueAccessor = this;
    this.form = new FormGroup({
      projectName: new FormControl<string>('', [Validators.required]),
      startDate: new FormControl<string>('', [Validators.required]),
      endDate: new FormControl<string>('', [Validators.required]),
      teamSize: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^\d+$/),
      ]),
      techStack: new FormControl<string[]>([], [Validators.required]),
      teamRoles: new FormControl<string[]>([], [Validators.required]),
      responsibilities: new FormControl<string[]>([], [Validators.required]),
      description: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(250),
      ]),
    });
  }

  ngOnInit(): void {
    this.initControlValueChanges();
    this.store.dispatch(fetchResponsibilities());
    this.store.dispatch(fetchTechStack());
    this.store.dispatch(fetchTeamRoles());
    this.form.controls['startDate'].valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(value => {
        this.form.controls['endDate'].markAsTouched();
        this.form.controls['endDate'].clearValidators();
        this.form.controls['endDate'].addValidators([
          Validators.required,
          dateValidatorMin(value),
        ]);
        this.form.controls['endDate'].updateValueAndValidity();
      });
    this.form.controls['endDate'].valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(value => {
        this.form.controls['startDate'].markAsTouched();
        this.form.controls['startDate'].clearValidators();
        this.form.controls['startDate'].addValidators([
          Validators.required,
          dateValidatorMax(value),
        ]);
        this.form.controls['startDate'].updateValueAndValidity();
      });
  }

  ngDoCheck(): void {
    if (this.form.invalid) {
      this.ngControl.control.setErrors({ projectFormError: true });
    }
    if (this.ngControl.control?.touched) {
      this.form.markAllAsTouched();
      this.cdRef.markForCheck();
    }
  }

  public onTouched: () => void;

  public onChange: (value: string) => void;

  public writeValue(obj: { [key: string]: string }): void {
    this.form.setValue(obj, { emitEvent: false });
    this.cdRef.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private initControlValueChanges(): void {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(value => {
      value.teamSize = Number(value.teamSize);
      this.onChange(value);
    });
  }
}
