import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AcademicYear} from '../../../shared/models';

@Component({
  selector: 'app-term-group',
  templateUrl: './term-group.component.html',
  styleUrls: ['./term-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermGroupComponent implements OnInit {
  @Input() group: AcademicYear;
  @Input() currentTerm: number;
  public listMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMode(): void {
    this.listMode = !this.listMode;
  }
}
