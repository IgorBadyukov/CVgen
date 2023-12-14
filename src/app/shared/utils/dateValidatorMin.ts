import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidatorMin(minValue: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valueDate = new Date(control.value);
    const minValueDate = new Date(minValue);
    if (minValueDate.getTime() > valueDate.getTime()) {
      return { matDatepickerMin: true };
    }
    return null;
  };
}
