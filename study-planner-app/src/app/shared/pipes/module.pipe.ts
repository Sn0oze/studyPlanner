import {Pipe, PipeTransform} from '@angular/core';
import {TermPlacement} from '../models';

@Pipe({
  name: 'module',
  pure: true
})
export class ModulePipe implements PipeTransform {

  transform(module: string, placement: TermPlacement): string {
    return module ? `${this.getPrefix(placement)}${module}` : '';
  }
  getPrefix(placement: TermPlacement): string {
    let prefix = '';
    switch (placement) {
      case 'spring':
        prefix = 'F';
        break;
      case 'fall':
        prefix = 'E';
        break;
    }
    return prefix;
  }
}
