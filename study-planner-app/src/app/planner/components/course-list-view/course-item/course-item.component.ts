import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../../shared/models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit(): void {
  }
}
