import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Course, Term, Year} from '../shared/models';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  studyPlan = plan;
  courses = courses;
  currentTerm = 3;
  constructor() { }

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Course[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  canDrop(drag: CdkDrag<Course>, drop: CdkDropList<Course[]>): boolean {
    return !drop.disabled;
  }

  isCompleted(term: Term, currentTerm: number): boolean {
    return term.order <= currentTerm;
  }
}

const courses = [
  {
    id: '02535',
    name: 'Database systems',
    placement: 'F4',
    category: 'elective'
  },
  {
    id: '06533',
    name: 'Database systems',
    placement: 'F4',
    category: 'elective'
  },
  {
    id: '02215',
    name: 'Database systems',
    placement: 'F4',
    category: 'elective'
  },
  {
    id: '02215',
    name: 'Database systems',
    placement: 'F4',
    category: 'elective'
  }
] as Course[];

const plan = [
  {
    year: 2018,
    terms: [
      {
        order: 1,
        placement: 'Fall',
        courses: [
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective'
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective'
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective'
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective'
          }
        ]
      }
    ]
  },
  {
    year: 2019,
    terms: [
      {
        order: 2,
        placement: 'Spring',
        courses: [
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          }
        ]
      },
      {
        order: 3,
        placement: 'Fall',
        courses: [
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          }
        ]
      }
    ]
  },
  {
    year: 2020,
    terms: [
      {
        order: 4,
        placement: 'Spring',
        courses: [
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          }
        ]
      },
      {
        order: 5,
        placement: 'Fall',
        courses: [
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          },
          {
            id: '02235',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 5
          }
        ]
      }
    ]
  }
] as Year[];


