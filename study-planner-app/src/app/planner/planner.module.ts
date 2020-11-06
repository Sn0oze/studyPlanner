import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerComponent } from './planner.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [PlannerComponent],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    SharedModule
  ]
})
export class PlannerModule { }
