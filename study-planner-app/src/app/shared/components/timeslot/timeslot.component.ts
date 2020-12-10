import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TimeSlot} from '../../models';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeslotComponent implements OnInit {
  @Input() timeslot: TimeSlot;
  constructor() { }

  ngOnInit(): void {
  }
}
