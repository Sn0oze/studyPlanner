import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlannerRoutingModule} from './planner-routing.module';
import {PlannerComponent} from './planner.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AcademicYearComponent} from './components/academic-year/academic-year.component';
import {TermDisplayModePipe} from './pipes/term-display-mode.pipe';
import {TermDisplayModeHintPipe} from './pipes/term-display-mode-hint.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CourseListViewComponent} from './components/course-list-view/course-list-view.component';
import {CourseCalendarViewComponent} from './components/course-calendar-view/course-calendar-view.component';
import {ActiveYearPipe} from './pipes/active-year.pipe';
import {PointTotalPipe} from './pipes/point-total.pipe';
import {CourseItemComponent} from './components/course-list-view/course-item/course-item.component';
import { TermComponent } from './components/term/term.component';


@NgModule({
  declarations: [
    PlannerComponent,
    AcademicYearComponent,
    TermDisplayModePipe,
    TermDisplayModeHintPipe,
    CourseListViewComponent,
    CourseCalendarViewComponent,
    ActiveYearPipe,
    PointTotalPipe,
    CourseItemComponent,
    TermComponent
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    DragDropModule,
    MatTooltipModule
  ]
})
export class PlannerModule {
}
