import {
  ChangeDetectorRef,
  Directive,
  DoCheck,
  OnInit,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputCva]',
  standalone: true,
})
export class InputCvaDirective
  implements ControlValueAccessor, OnInit, DoCheck
{
  public control = new FormControl('');

  constructor(
    @Self() private ngControl: NgControl,
    private cdRef: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
    if (this.ngControl.control?.parent) {
      this.control.setParent(this.ngControl.control.parent);
    }
  }

  public ngOnInit(): void {
    this.initControlValueChanges();
  }

  public ngDoCheck(): void {
    if (this.ngControl.control.errors !== this.control.errors) {
      this.initErrors();
    }
    if (this.ngControl.control.dirty) {
      this.control.markAsDirty();
    } else {
      this.control.markAsPristine();
    }
    this.cdRef.markForCheck();
  }

  public onChange: (value: string) => void;

  public onTouched: () => void;

  public writeValue(value: string): void {
    this.control.setValue(value, { emitEvent: false });
    this.cdRef.markForCheck();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private initControlValueChanges(): void {
    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }

  private initErrors(): void {
    this.control.setErrors(this.ngControl.control!.errors);
  }
}
