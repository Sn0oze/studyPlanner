import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course, Year} from '../shared/models';
import {PlannerService} from '../shared/services/planner.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlannerComponent implements OnInit {
  public studyPlan: Observable<Year[]>;
  public bookmarks: Observable<Course[]>;
  public currentTerm = 3;

  constructor(
    private planner: PlannerService
  ) { }

  ngOnInit(): void {
    this.studyPlan = this.planner.getStudyPlan();
    this.bookmarks = this.planner.getBookmarks();
  }
}


