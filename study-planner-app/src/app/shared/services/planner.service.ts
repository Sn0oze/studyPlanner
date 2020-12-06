import { Injectable } from '@angular/core';
import {Course, Year} from '../models';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  constructor() { }

  public getBookmarks(): Observable<Course[]> {
    return of(courses).pipe(delay(2000));
  }

  public getStudyPlan(): Observable<Year[]> {
    return of(plan).pipe(delay(1500));
  }
}

const courses = [
  {
    id: '02535',
    name: 'Database systems',
    placement: 'F4',
    category: 'elective',
    points: 5
  },
  {
    id: '06533',
    name: 'Database systems',
    placement: 'F4',
    category: 'elective',
    points: 10
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
    points: 7.5
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
            category: 'elective',
            points: 5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 10
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 10
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
            points: 10
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 10
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
            points: 10
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
            points: 10
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
            points: 7.5
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 10
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
            points: 10
          },
          {
            id: '02215',
            name: 'Database systems',
            placement: 'F4',
            category: 'elective',
            points: 10
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
  },
  {
    year: 2021,
    terms: [
      {
        order: 6,
        placement: 'Spring',
        courses: []
      }
    ]
  }
] as Year[];
