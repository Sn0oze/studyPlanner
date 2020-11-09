import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termDisplayMode',
  pure: true
})
export class TermDisplayModePipe implements PipeTransform {
  transform(listMode: boolean): string {
    return listMode ? 'view_module' : 'view_list';
  }
}
