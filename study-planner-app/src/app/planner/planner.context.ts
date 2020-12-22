import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Course} from '../shared/models';

@Injectable()
export class PlannerContext {
  private  dragSelection = new BehaviorSubject<Course | null>(null);
  private  moduleSelection = new BehaviorSubject<string | null>(null);
  constructor() {}

  public getDragSelection(): Observable<Course | null> {
    return this.dragSelection.asObservable();
  }

  public getDragSelectionSnapshot(): Course {
    return this.dragSelection.value;
  }

  public updateDragSelection(course: Course): void {
    this.dragSelection.next(course);
  }

  public getModuleSelection(): Observable<string | null> {
    return this.moduleSelection.asObservable();
  }

  public updateModuleSelection(module: string): void {
    this.moduleSelection.next(module);
  }
}
