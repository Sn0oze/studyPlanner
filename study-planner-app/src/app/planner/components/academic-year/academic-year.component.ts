import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AcademicYear} from '../../../shared/models';

@Component({
  selector: 'app-academic-year',
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademicYearComponent implements OnInit {
  @Input() year: AcademicYear;
  @Input() currentTerm: number;
  public listMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMode(): void {
    this.listMode = !this.listMode;
  }
}
