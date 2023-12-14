import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue',
  standalone: true,
})
export class KeyValuePipe<T> implements PipeTransform {
  transform(obj: T, path: string) {
    const keys: string[] = path.split('.');
    let result: any = obj;

    for (const key of keys) {
      if (Array.isArray(result)) {
        result = result.map((item: any) =>
          item && item[key] !== undefined ? item[key] : '',
        );
      } else {
        result = result && result[key] !== undefined ? result[key] : '';
      }
    }
    return result;
  }
}
