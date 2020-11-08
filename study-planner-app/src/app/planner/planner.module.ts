import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerComponent } from './planner.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TermGroupComponent } from './term-group/term-group.component';


@NgModule({
  declarations: [PlannerComponent, TermGroupComponent],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    DragDropModule
  ]
})
export class PlannerModule { }
