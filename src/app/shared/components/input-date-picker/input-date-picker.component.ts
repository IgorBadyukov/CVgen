import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnInit,
  Self,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ResolveErrorMessagePipe } from '../../pipes/resolve-error-message.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-input-date-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    ResolveErrorMessagePipe,
    TranslateModule,
  ],
  templateUrl: './input-date-picker.component.html',
  styleUrl: './input-date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDatePickerComponent
  implements ControlValueAccessor, OnInit, DoCheck
{
  @Input() label: string = '';

  public control: FormControl = new FormControl('');

  constructor(
    @Self() private ngControl: NgControl,
    private cdRef: ChangeDetectorRef,
  ) {
    ngControl.valueAccessor = this;
    if (this.ngControl.control?.parent) {
      this.control.setParent(this.ngControl.control.parent);
    }
  }

  private onChange: (value: Date | null) => void = () => {};

  public onTouched: () => void = () => {};

  ngOnInit() {
    this.initControlValueChanges();
  }

  ngDoCheck(): void {
    if (this.ngControl.control?.errors !== this.control.errors) {
      this.initErrors();
    }
    if (this.ngControl.control?.dirty) {
      this.control.markAsDirty();
    } else {
      this.control.markAsPristine();
    }
    this.cdRef.markForCheck();
  }

  writeValue(value: Date | null): void {
    this.control.setValue(value, { emitEvent: false });
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public initControlValueChanges(): void {
    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }

  private initErrors(): void {
    this.control.setErrors(this.ngControl.control!.errors);
  }
}
