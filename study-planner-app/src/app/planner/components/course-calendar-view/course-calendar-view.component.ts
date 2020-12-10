import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Course, ModuleRow, TermPlacement} from '../../../shared/models';

@Component({
  selector: 'app-course-calendar-view',
  templateUrl: './course-calendar-view.component.html',
  styleUrls: ['./course-calendar-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCalendarViewComponent implements OnInit {
  @Input() courses: Course[];
  @Input() placement: TermPlacement;
  public header = weekDays;
  public rows = moduleRows;
  public courseMap = new Map<string, Course[]>();

  constructor() { }

  ngOnInit(): void {
    this.courses.forEach(course => {
      const module = course.module;
      if (this.courseMap.has(module)) {
        this.courseMap.get(module).push(course);
      } else {
        this.courseMap.set(module, [course]);
      }
    });
    console.log(this.courseMap, this.courses.length);
    console.log(this.courseMap.get('F4'));
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
