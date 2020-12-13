import * as d3 from 'd3';
export class DonutChart {
  private svg: d3.Selection<SVGSVGElement, any, any, any>;
  constructor(private container: HTMLElement) {
    this.init();
  }

  public init(): void {
    this.svg = d3.select(this.container).append('svg');
  }
}
