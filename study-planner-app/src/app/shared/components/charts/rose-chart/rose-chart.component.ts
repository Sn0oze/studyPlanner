import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CategoryColor} from '../../../constants';
import {DonutChartDatum} from '../donut-chart/donut-chart.model';
import {RoseChart} from './rose-chart';

@Component({
  selector: 'app-rose-chart',
  templateUrl: './rose-chart.component.html',
  styleUrls: ['./rose-chart.component.scss']
})
export class RoseChartComponent implements OnInit {
  @ViewChild('chartContainer', {static: true}) private  chartContainerRef: ElementRef;
  private roseChart: RoseChart;

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
    this.roseChart = new RoseChart(this.chartContainerRef.nativeElement, data);
  }
}
