import {
  ChangeDetectorRef,
  Directive,
  DoCheck,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormGroup, NgControl } from '@angular/forms';
import { untilDestroyed } from '@ngneat/until-destroy';

@Directive({
  selector: '[appFormCva]',
  standalone: true,
})
export class FormCvaDirective implements ControlValueAccessor, OnInit, DoCheck {
  public form: FormGroup;

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    public readonly cdRef: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.initControlValueChanges();
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
