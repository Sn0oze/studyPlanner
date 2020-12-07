import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusBarComponent} from './components/status-bar/status-bar.component';
import {PageHeaderComponent} from './components/page-header/page-header.component';
import {ChartsModule} from './components/charts/charts.module';
import { CategoryColorPipe } from './pipes/category-color.pipe';

@NgModule({
  declarations: [
    StatusBarComponent,
    PageHeaderComponent,
    CategoryColorPipe
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
