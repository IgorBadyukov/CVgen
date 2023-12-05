import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitArray',
  standalone: true,
})
export class SplitArrayPipe implements PipeTransform {
  transform(value: any): string {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value !== undefined ? String(value) : '';
  }
}
