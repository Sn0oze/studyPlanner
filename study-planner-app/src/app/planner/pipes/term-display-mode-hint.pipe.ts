import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termDisplayModeHint',
  pure: true
})
export class TermDisplayModeHintPipe implements PipeTransform {

  public transform(listMode: boolean): string {
    return listMode ? 'Show as Calendar' : 'Show as list';
  }
}
