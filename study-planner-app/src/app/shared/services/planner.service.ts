import { Injectable } from '@angular/core';
import {Course, AcademicYear} from '../models';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  constructor() { }

  public getBookmarks(): Observable<Course[]> {
    return of(courses).pipe(delay(200));
  }

  public getStudyPlan(): Observable<AcademicYear[]> {
    return of(plan).pipe(delay(500));
  }
}

const courses = [
  {
    id: '02535',
    name: 'Database systems',
    module: '4A',
    placement: ['spring', 'fall'],
    category: 'technological_specialisation',
    points: 5
  },
  {
    id: '06533',
    name: 'Webservices',
    module: '2B',
    placement: ['fall'],
    category: 'general_competence',
    points: 10
  },
  {
    id: '02345',
    name: 'Computational Data Analysis',
    module: '1B',
    placement: ['spring', 'fall'],
    category: 'technological_specialisation',
    points: 5
  },
  {
    id: '03455',
    name: 'Algorithms for Massive Datasets',
    module: '3B',
    placement: ['fall'],
    category: 'elective',
    points: 7.5
  },
  {
    id: '04455',
    name: 'Graph Theory',
    module: '1A',
    placement: ['spring'],
    category: 'elective',
    points: 5
  }
] as Course[];

const plan = [
  {
    year: 2018,
    terms: [
      {
        order: 1,
        placement: 'fall',
        courses: [
          {
            id: '02215',
            name: 'Cognitive Science',
            module: '2A',
            placement: ['fall'],
            category: 'elective',
            points: 5
          },
          {
            id: '02345',
            name: 'Social graphs',
            module: '3A',
            placement: ['fall'],
            category: 'technological_specialisation',
            points: 10
          },
          {
            id: '02277',
            name: 'UX Engineering',
            module: '5B',
            placement: ['fall'],
            category: 'technological_specialisation',
            points: 10
          },
          {
            id: '02332',
            name: 'Database systems',
            module: '1B',
            placement: ['fall'],
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
        placement: 'spring',
        courses: [
          {
            id: '04215',
            name: 'Computational Tools',
            module: '3A',
            placement: ['spring'],
            category: 'elective',
            points: 5
          },
          {
            id: '02225',
            name: 'Algorithms 1',
            module: '4A',
            placement: ['spring'],
            category: 'technological_specialisation',
            points: 10
          },
          {
            id: '04415',
            name: 'Discrete Mathematics',
            module: '3B',
            placement: ['spring'],
            category: 'general_competence',
            points: 10
          },
          {
            id: '03915',
            name: 'Social Data',
            module: '1A',
            placement: ['spring'],
            category: 'elective',
            points: 5
          }
        ]
      },
      {
        order: 3,
        placement: 'fall',
        courses: [
          {
            id: '03315',
            name: 'Algorithms 2',
            module: '5B',
            placement: ['fall'],
            category: 'technological_specialisation',
            points: 5
          },
          {
            id: '01515',
            name: 'HardTech',
            module: '4A',
            placement: ['fall'],
            category: 'general_competence',
            points: 10
          },
          {
            id: '03715',
            name: 'Personal Data Interaction',
            module: '4B',
            placement: ['fall'],
            category: 'elective',
            points: 5
          },
          {
            id: '04515',
            name: 'Rendering',
            module: '3A',
            placement: ['fall'],
            category: 'technological_specialisation',
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
        placement: 'spring',
        courses: [
          {
            id: '02212',
            name: 'Software Engineering',
            module: '5B',
            placement: ['spring'],
            category: 'general_competence',
            points: 5
          },
          {
            id: '04435',
            name: 'Mobile Development',
            module: '5B',
            placement: ['spring'],
            category: 'elective',
            points: 5
          },
          {
            id: '03945',
            name: 'Introduction to Machine Learning',
            module: '4A',
            placement: ['spring'],
            category: 'elective',
            points: 7.5
          },
          {
            id: '02267',
            name: 'Deep Learning',
            module: '3A',
            placement: ['spring'],
            category: 'elective',
            points: 10
          },
          {
            id: '02215',
            name: 'Advanced Machine Learning',
            module: '2A',
            placement: ['spring'],
            category: 'general_competence',
            points: 5
          }
        ]
      },
      {
        order: 5,
        placement: 'fall',
        courses: [
          {
            id: '02215',
            name: 'Thesis',
            module: 'F4',
            placement: ['thesis'],
            category: 'thesis',
            points: 32.5
          }
        ]
      }
    ]
  },
/*  {
    year: 2021,
    terms: [
      {
        order: 6,
        placement: 'spring',
        courses: []
      }
    ]
  }
 */
] as AcademicYear[];
