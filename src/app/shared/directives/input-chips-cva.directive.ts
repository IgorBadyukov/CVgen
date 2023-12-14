import {
  ChangeDetectorRef,
  Directive,
  DoCheck,
  Input,
  Self,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Directive({
  selector: '[appInputChipsCva]',
  standalone: true,
})
export class InputChipsCvaDirective implements ControlValueAccessor, DoCheck {
  @Input() autocompleteOptions: string[] = [];

  public selectedOptions: string[] = [];

  public separatorKeysCodes: number[] = [ENTER, COMMA];

  public control: FormControl = new FormControl('');

  public controlChips: FormControl = new FormControl(this.selectedOptions);

  constructor(
    @Self() private ngControl: NgControl,
    private cdRef: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
    if (this.ngControl.control?.parent) {
      this.control.setParent(this.ngControl.control.parent);
      this.controlChips.setParent(this.ngControl.control.parent);
    }
  }

  public ngDoCheck(): void {
    if (this.ngControl.control.errors !== this.control.errors) {
      this.initErrors();
    }
    if (this.ngControl.control.touched) {
      this.controlChips.markAsTouched();
      this.control.markAsTouched();
    } else {
      this.control.markAsPristine();
    }
    this.cdRef.markForCheck();
  }

  private onChange: (value: string[]) => void;

  public onTouched: () => void;

  get filteredOptions(): string[] {
    const optionsSet = new Set(this.autocompleteOptions);
    return this.autocompleteOptions.filter(
      option =>
        !this.selectedOptions.includes(option) && optionsSet.has(option),
    );
  }

  writeValue(value: string[]): void {
    this.control.setValue(value, { emitEvent: false });
    this.selectedOptions = value;
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private initErrors(): void {
    this.control.setErrors(this.ngControl.control!.errors);
    this.controlChips.setErrors({ customError: true });
  }

  public add(event: MatChipInputEvent): void {
    const value =
      this.control.value.length - 1 === 0 ? '' : this.control.value.trim();
    if (value && !this.selectedOptions.includes(value)) {
      this.selectedOptions.push(value);
      this.control.setValue(null);
      this.onChange(this.selectedOptions);
    }
    event.chipInput.clear();
    this.control.setErrors(null);
    this.control.setValue('');
    this.onTouched();
  }

  public remove(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
      this.onChange(this.selectedOptions);
      this.onTouched();
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if (value && !this.selectedOptions.includes(value)) {
      this.selectedOptions.push(value);
      this.controlChips.setErrors(null);
      this.onChange(this.selectedOptions);
      this.onTouched();
    }
  }
}
