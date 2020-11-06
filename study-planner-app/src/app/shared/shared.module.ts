import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { PageHeaderComponent } from './page-header/page-header.component';



@NgModule({
    declarations: [StatusBarComponent, PageHeaderComponent],
  exports: [
    PageHeaderComponent,
    StatusBarComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
