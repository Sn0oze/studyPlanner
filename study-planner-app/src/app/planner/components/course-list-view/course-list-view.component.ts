import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../shared/models';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {PlannerContext} from '../../planner.context';

@Component({
  selector: 'app-course-list-view',
  templateUrl: './course-list-view.component.html',
  styleUrls: ['./course-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListViewComponent implements OnInit {
  @Input() courses: Course[];
  @Input() dropDisabled: boolean;
  public canDrop = (drag: CdkDrag<Course>, drop: CdkDropList<Course[]>): boolean => !drop.disabled;

  constructor(private plannerContext: PlannerContext) { }

  ngOnInit(): void {
  }

  public drop(event: CdkDragDrop<Course[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public notifyDragSelection(course: Course): void {
    this.plannerContext.updateDragSelection(course);
  }
}
