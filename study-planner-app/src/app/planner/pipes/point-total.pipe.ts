import { Pipe, PipeTransform } from '@angular/core';
import {Course, AcademicYear, Term, instanceOfTerm, instanceOfAcademicYear} from '../../shared/models';

@Pipe({
  name: 'pointTotal',
  pure: true
})
export class PointTotalPipe implements PipeTransform {

  private pointsAccumulator = (sum: number, course: Course) => sum + course.points;

  public transform(period: AcademicYear | Term): number {
    let result = 0;
    if (instanceOfTerm(period)) {
      result = period.courses.reduce(this.pointsAccumulator, 0);
    }
    else if (instanceOfAcademicYear(period)) {
      result = period.terms
        .map(term => term.courses.reduce(this.pointsAccumulator, 0))
        .reduce((sum, termTotal) => sum + termTotal, 0);
    }
    return result;
  }
}
