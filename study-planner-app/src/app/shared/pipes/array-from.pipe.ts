import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFrom',
  pure: true
})
export class ArrayFromPipe implements PipeTransform {
  transform<T>(set: Set<T>): T[] {
    return Array.from<T>(set);
  }
}
