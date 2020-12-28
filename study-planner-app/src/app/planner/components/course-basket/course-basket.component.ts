import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Course, TermPlacement} from '../../../shared/models';
import {SubSink} from '../../../shared/utils';
import {PlannerContext} from '../../planner.context';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-course-basket',
  templateUrl: './course-basket.component.html',
  styleUrls: ['./course-basket.component.scss']
})
export class CourseBasketComponent implements OnInit, OnDestroy {
  @Input() courses: Course[];
  @Input() dropDisabled: boolean;
  @Input() placement: TermPlacement;
  public draggedCourse: Course;
  private subs = new SubSink();


  constructor(
    private plannerContext: PlannerContext,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public canDrop = (drag: CdkDrag<Course>, drop: CdkDropList<Course[]>): boolean => (
    !drop.disabled
  )

  public drop(event: CdkDragDrop<Course[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
