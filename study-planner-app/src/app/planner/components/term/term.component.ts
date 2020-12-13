import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Term} from '../../../shared/models';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermComponent implements OnInit {
  @Input() term: Term;
  @Input() isCurrent = false;
  @Input() isLocked = true;
  public listMode = true;

  constructor() { }

  ngOnInit(): void {
    this.listMode = this.isCurrent;
  }

  public toggleMode(): void {
    this.listMode = !this.listMode;
  }
}
