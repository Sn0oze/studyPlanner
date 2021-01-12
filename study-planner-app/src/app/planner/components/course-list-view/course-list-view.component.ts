import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Course, TermPlacement} from '../../../shared/models';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {PlannerContext} from '../../planner.context';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-course-list-view',
  templateUrl: './course-list-view.component.html',
  styleUrls: ['./course-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListViewComponent implements OnInit, OnDestroy {
  @Input() courses: Course[];
  @Input() placement: TermPlacement;
  @Input() set dropDisabled(disabled: boolean) {
    this.isDisabled = disabled;
    if (this.isDisabled) {
      this.subscription?.unsubscribe();
    } else {
      this.subscription = this.plannerContext.getDragSelection().subscribe(course => {
        this.draggedCourse = course?.placement.includes(this.placement) ? course : null;
        this.changeDetectorRef.markForCheck();
      });
    }
  }
  get dropDisabled(): boolean {
    return this.isDisabled;
  }
  private isDisabled: boolean;
  public draggedCourse: Course;
  private subscription: Subscription;


  constructor(
    private plannerContext: PlannerContext,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public canDrop = (drag: CdkDrag<Course>, drop: CdkDropList<Course[]>): boolean => (
    !drop.disabled && (!this.placement || !!this.draggedCourse)
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
