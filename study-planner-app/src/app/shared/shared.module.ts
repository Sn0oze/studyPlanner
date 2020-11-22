import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusBarComponent} from './status-bar/status-bar.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {ChartsModule} from './charts/charts.module';

@NgModule({
  declarations: [
    StatusBarComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    PageHeaderComponent,
    StatusBarComponent,
    ChartsModule
  ]
})
export class SharedModule {
}
