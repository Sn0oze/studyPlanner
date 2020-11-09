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
import {TermGroupComponent} from './term-group/term-group.component';
import { TermDisplayModePipe } from './pipes/term-display-mode.pipe';
import { TermDisplayModeHintPipe } from './pipes/term-display-mode-hint.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    PlannerComponent,
    TermGroupComponent,
    TermDisplayModePipe,
    TermDisplayModeHintPipe
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
