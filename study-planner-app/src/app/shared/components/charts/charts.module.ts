import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DonutChartComponent} from './donut-chart/donut-chart.component';
import { RoseChartComponent } from './rose-chart/rose-chart.component';



@NgModule({
    declarations: [
        DonutChartComponent,
        RoseChartComponent
    ],
    exports: [
        DonutChartComponent,
        RoseChartComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ChartsModule { }
