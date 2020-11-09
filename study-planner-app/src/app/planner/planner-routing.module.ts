import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlannerComponent} from './planner.component';

const routes: Routes = [
  {
    path: '',
    component: PlannerComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule {
}
