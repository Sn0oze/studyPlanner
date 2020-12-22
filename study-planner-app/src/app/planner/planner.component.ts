import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course, AcademicYear} from '../shared/models';
import {PlannerService} from '../shared/services/planner.service';
import {Observable} from 'rxjs';
import {PlannerContext} from './planner.context';


@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
  providers: [PlannerContext],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlannerComponent implements OnInit {
  public studyPlan: Observable<AcademicYear[]>;
  public bookmarks: Observable<Course[]>;
  public currentTerm = 2;

  constructor(private planner: PlannerService) { }

  ngOnInit(): void {
    this.studyPlan = this.planner.getStudyPlan();
    this.bookmarks = this.planner.getBookmarks();
  }
}


