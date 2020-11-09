import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Year} from '../../../shared/models';

@Component({
  selector: 'app-term-group',
  templateUrl: './term-group.component.html',
  styleUrls: ['./term-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
}
