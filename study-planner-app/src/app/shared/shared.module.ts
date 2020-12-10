import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusBarComponent} from './components/status-bar/status-bar.component';
import {PageHeaderComponent} from './components/page-header/page-header.component';
import {ChartsModule} from './components/charts/charts.module';
import { CategoryColorPipe } from './pipes/category-color.pipe';
import { TimeDisplayComponent } from './components/time-display/time-display.component';
import { TimeslotComponent } from './components/timeslot/timeslot.component';

@NgModule({
  declarations: [
    StatusBarComponent,
    PageHeaderComponent,
    CategoryColorPipe,
    TimeDisplayComponent,
    TimeslotComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
    exports: [
        PageHeaderComponent,
        StatusBarComponent,
        ChartsModule,
        CategoryColorPipe,
        TimeslotComponent
    ]
})
export class SharedModule {
}
