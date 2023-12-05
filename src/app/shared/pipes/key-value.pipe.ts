import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue',
  standalone: true,
})
export class KeyValuePipe<T> implements PipeTransform {
  transform(obj: T, path: string) {
    return path
      .split('.')
      .reduce(
        (o: any, key: string) => (o && o[key] !== undefined ? o[key] : ''),
        obj,
      );
  }
}
