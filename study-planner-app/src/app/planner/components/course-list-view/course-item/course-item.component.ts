import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../../shared/models';
import {PlannerContext} from '../../../planner.context';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  constructor(private plannerContext: PlannerContext) { }

  ngOnInit(): void {
  }

  public notifyDragSelection(course: Course): void {
    this.plannerContext.updateDragSelection(course);
  }
}
