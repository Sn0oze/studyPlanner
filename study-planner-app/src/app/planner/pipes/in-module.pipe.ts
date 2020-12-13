import { Pipe, PipeTransform } from '@angular/core';
import {Course, TermPlacement} from '../../shared/models';

@Pipe({
  name: 'inModule',
  pure: true
})
export class InModulePipe implements PipeTransform {

  transform(course: Course | null, module: string, placement: TermPlacement): boolean {
    return course?.module === module && course.placement.includes(placement);
  }
}
