import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidatorMax(maxValue: string | Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valueDate = new Date(control.value);
    const maxValueDate = new Date(maxValue);
    if (maxValueDate.getTime() < valueDate.getDate()) {
      return { matDatepickerMax: true };
    }
    return null;
  };
}
