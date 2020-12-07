import { Pipe, PipeTransform } from '@angular/core';
import {Category} from '../models';

@Pipe({
  name: 'categoryColor'
})
export class CategoryColorPipe implements PipeTransform {

  transform(category: Category, type: 'class' | 'color' = 'class'): string {
    return category.replace(' ', '-');
  }
}
