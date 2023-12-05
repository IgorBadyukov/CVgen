import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ERROR_MESSAGES } from '../constants/error-messages';
@Pipe({
  name: 'resolveErrorMessage',
  standalone: true,
})
export class ResolveErrorMessagePipe implements PipeTransform {
  transform(errors: ValidationErrors): string {
    return ERROR_MESSAGES[Object.keys(errors)[0]];
  }
}
