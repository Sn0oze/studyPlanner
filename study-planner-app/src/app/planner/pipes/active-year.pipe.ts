import { Pipe, PipeTransform } from '@angular/core';
import {AcademicYear} from '../../shared/models';

@Pipe({
  name: 'activeYear',
  pure: true
})
export class ActiveYearPipe implements PipeTransform {

  public transform(year: AcademicYear, currentTerm): boolean {
    return year.terms.some(term => term.order === currentTerm);
  }
}
