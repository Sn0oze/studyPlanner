import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Course} from '../shared/models';

@Injectable()
export class PlannerContext {
  public  dragSelection = new BehaviorSubject<Course>(null);
  constructor() {}

  public getDragSelection(): Observable<Course> {
    return this.dragSelection.asObservable();
  }

  public updateDragSelection(course: Course): void {
    this.dragSelection.next(course);
  }
}
