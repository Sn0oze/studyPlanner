import { Pipe, PipeTransform } from '@angular/core';
import {Course, AcademicYear} from '../../shared/models';

@Pipe({
  name: 'pointTotal',
  pure: true
})
export class PointTotalPipe implements PipeTransform {

  private pointsAccumulator = (sum: number, course: Course) => sum + course.points;

  public transform(year: AcademicYear, order?: number): number {
    if (order) {
      const courses = year.terms.find(term => term.order === order)?.courses || [];
      return courses.reduce(this.pointsAccumulator, 0);
    } else {
      year.terms
        .map(term => term.courses.reduce(this.pointsAccumulator, 0))
        .reduce((sum, termTotal) => sum + termTotal, 0);
    }
  }
}
