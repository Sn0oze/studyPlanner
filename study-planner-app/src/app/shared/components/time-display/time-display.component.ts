import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TimeSegment} from '../../models';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeDisplayComponent implements OnInit {
  @Input() time: TimeSegment;

  constructor() { }

  ngOnInit(): void {
  }

}
