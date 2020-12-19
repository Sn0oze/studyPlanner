import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DonutChart} from './donut-chart';
import {DonutChartDatum} from './donut-chart.model';
import {CategoryColor} from '../../../constants';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonutChartComponent implements OnInit {
  @ViewChild('chartContainer', {static: true}) private  chartContainerRef: ElementRef;
  private donutChart: DonutChart;

  constructor() { }

  ngOnInit(): void {
    const data = [
      {
        label: 'elective',
        color: CategoryColor.ELECTIVE,
        total: 30,
        current: 25
      },
      {
        label: 'general competence',
        color: CategoryColor.GENERAL_COMPETENCE,
        total: 30,
        current: 20
      },
      {
        label: 'Technological specialisation',
        color: CategoryColor.TECHNOLOGICAL_SPECIALISATION,
        total: 30,
        current: 10
      },
      {
        label: 'thesis',
        color: CategoryColor.THESIS,
        total: 30,
        current: 5
      },
    ] as DonutChartDatum[];
    this.donutChart = new DonutChart(this.chartContainerRef.nativeElement, data);
  }
}
