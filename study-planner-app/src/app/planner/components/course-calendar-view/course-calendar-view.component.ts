import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Course, ModuleRow, TermPlacement} from '../../../shared/models';
import {SubSink} from '../../../shared/utils';
import {PlannerContext} from '../../planner.context';

@Component({
  selector: 'app-course-calendar-view',
  templateUrl: './course-calendar-view.component.html',
  styleUrls: ['./course-calendar-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCalendarViewComponent implements OnInit, OnDestroy {
  @Input() courses: Course[];
  @Input() placement: TermPlacement;
  public header = weekDays;
  public rows = moduleRows;
  public courseMap = new Map<string, Course[]>();
  public draggedCourse: Course;
  private subs = new SubSink();

  constructor(
    private plannerContext: PlannerContext,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subs.add(this.plannerContext.getDragSelection().subscribe(course => {
      this.draggedCourse = course?.placement.includes(this.placement) ? course : null;
      this.changeDetectorRef.markForCheck();
    }));
    this.courses.forEach(course => {
      const module = course.module;
      if (this.courseMap.has(module)) {
        this.courseMap.get(module).push(course);
      } else {
        this.courseMap.set(module, [course]);
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

const weekDays = [
  '',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
];
const moduleRows = [
  {
    timeSlot: {
      start: {hour: '8', minutes: '00'},
      end: {hour: '12', minutes: '00'}
    },
    modules: ['1A', '3A', '5A', '2B', '4B']
  },
  {
    timeSlot: {
      start: {hour: '13', minutes: '00'},
      end: {hour: '17', minutes: '00'}
    },
    modules: ['2A', '4A', '5B', '1B', '3B']

  },
  {
    timeSlot: {
      start: {hour: '18', minutes: '00'},
      end: {hour: '22', minutes: '00'}
    },
    modules: ['', '7', '', '', '']
  }
] as ModuleRow[];
