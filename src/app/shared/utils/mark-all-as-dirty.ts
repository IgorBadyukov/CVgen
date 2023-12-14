import { FormGroup } from '@angular/forms';

export function markFormGroupDirty(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach(control => {
    if (control instanceof FormGroup) {
      markFormGroupDirty(control);
    } else {
      control.markAsDirty();
    }
  });
}
