import { Pipe, PipeTransform } from '@angular/core';
import {Year} from '../../shared/models';

@Pipe({
  name: 'activeYear',
  pure: true
})
export class ActiveYearPipe implements PipeTransform {

  public transform(year: Year, currentTerm): boolean {
    return year.terms.some(term => term.order === currentTerm);
  }
}
