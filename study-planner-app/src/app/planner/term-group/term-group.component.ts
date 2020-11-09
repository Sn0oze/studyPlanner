import {Component, Input, OnInit} from '@angular/core';
import {Course, Year} from '../../shared/models';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-term-group',
  templateUrl: './term-group.component.html',
  styleUrls: ['./term-group.component.scss']
})
export class TermGroupComponent implements OnInit {
  @Input() group: Year;
  @Input() currentTerm: number;
  listMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMode(): void {
    this.listMode = !this.listMode;
  }

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
}
