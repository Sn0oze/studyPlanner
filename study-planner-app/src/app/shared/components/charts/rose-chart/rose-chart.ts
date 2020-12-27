import * as d3 from 'd3';
import {DonutChartDatum} from '../donut-chart/donut-chart.model';

export class RoseChart {
  private svg: d3.Selection<SVGElement, any, any, any>;
  private dimensions = {height: 100, width: 200};
  private radius: number;
  private padding = {top: 0, right: 0, bottom: 0, left: 0};
  private slices: any;
  private labels: any;
  private lines: any;
  private pie: any;
  private arc: any;
  private outerArc: any;


  constructor(
    private container: HTMLElement,
    private chartData: DonutChartDatum[]
  ) {
    this.init();
  }

  private toRgba(hex: string, opacity: number): string {
    const color = d3.color(hex);
    color.opacity = opacity;
    return color.formatRgb();
  }

  public init(): void {
    this.svg = d3.select(this.container)
      .append('svg')
      .attr('width', this.dimensions.width)
      .attr('height', this.dimensions.height)
      .append('g');

    this.slices = this.svg
      .append('g')
      .attr('class', 'slices');
    this.labels = this.svg
      .append('g')
      .attr('class', 'labels');
    this.lines = this.svg
      .append('g')
      .attr('class', 'lines');

    this.radius = Math.min(this.dimensions.width, this.dimensions.height) / 2;

    this.pie = d3.pie<DonutChartDatum>()
      .sort(null)
      .value(d => d.total);

    this.arc = d3.arc()
      .outerRadius(this.radius * .8)
      .innerRadius(0);

    const arcCurrent = d3.arc<d3.PieArcDatum<DonutChartDatum>>()
      .outerRadius(d => (this.radius * .8) * (d.data.current / d.data.total))
      .innerRadius(0) as any;

    this.svg
      .attr('transform', `translate(${this.dimensions.width / 2},${this.dimensions.height / 2})`);

    const data = this.pie(this.chartData) as d3.PieArcDatum<DonutChartDatum>[];
    const currentData = data.map((slice): d3.PieArcDatum<DonutChartDatum> => (
      {
        index: slice.index,
        data: slice.data,
        value: slice.data.current,
        padAngle: slice.padAngle,
        startAngle: slice.startAngle,
        endAngle: slice.endAngle
      }
    ));

    this.svg
      .selectAll('total-slices')
      .data<d3.PieArcDatum<DonutChartDatum>>(data)
      .enter()
      .append('path')
      .attr('d', this.arc)
      .attr('class', 'donut-arc')
      // .style('stroke', d => d.data.color)
      .attr('fill', d => this.toRgba(d.data.color, .1));

    this.svg
      .selectAll('current-slices')
      .data<d3.PieArcDatum<DonutChartDatum>>(currentData)
      .enter()
      .append('path')
      .attr('d', arcCurrent)
      .attr('class', 'donut-arc current-slices')
      .attr('fill', d => d.data.color);
  }
}
