import { Pipe, PipeTransform } from '@angular/core';
import {Category} from '../models';
import {CategoryColorMap} from '../constants';

@Pipe({
  name: 'categoryColor',
  pure: true
})
export class CategoryColorPipe implements PipeTransform {

  transform(category: Category): string {
    return CategoryColorMap[category];
  }
}
