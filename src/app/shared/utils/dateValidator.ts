import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!(value instanceof Date)) {
      return { invalidDateFormat: true };
    }
    return null;
  };
}

export function dateRangeValidator(
  startControlName: string,
  endControlName: string,
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const startControl = formGroup.get(startControlName);
    const endControl = formGroup.get(endControlName);
    if (
      !startControl ||
      !endControl ||
      !startControl.value ||
      !endControl.value
    ) {
      return null;
    }
    const startDate = new Date(startControl.value);
    const endDate = new Date(endControl.value);
    if (startDate > endDate) {
      return { dateRangeError: true };
    }
    return null;
  };
}
