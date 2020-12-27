import * as d3 from 'd3';
import {DonutChartDatum} from './donut-chart.model';
export class DonutChart {
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
      .innerRadius(this.radius * .5)
      .cornerRadius(0)
      .padAngle(.075);

    this.outerArc = d3.arc()
      .innerRadius(this.radius * 0.5)
      .outerRadius(this.radius * 0.5);

    this.svg
      .attr('transform', `translate(${this.dimensions.width / 2},${this.dimensions.height / 2})`);

    /*
    const slice = this.svg.select('.slices').selectAll('path.slice')
      .data<DonutChartData>(this.pie(this.chartData));

    slice.enter()
      .insert('path')
      .style('fill', (d) => d.color)
      .attr('class', 'slice');
     */

    const data = this.pie(this.chartData) as d3.PieArcDatum<DonutChartDatum>[];
    const currentData = data.map((slice): d3.PieArcDatum<DonutChartDatum> => (
      {
        index: slice.index,
        data: slice.data,
        value: slice.data.current,
        padAngle: slice.padAngle,
        startAngle: slice.startAngle,
        endAngle: slice.startAngle + ((slice.endAngle - slice.startAngle) * (slice.data.current / slice.data.total))
      }
    ));

    this.svg
      .selectAll('total-slices')
      .data<d3.PieArcDatum<DonutChartDatum>>(data)
      .enter()
      .append('path')
      .attr('d', this.arc)
      .attr('class', 'donut-arc total-slices')
      .style('stroke', d => d.data.color)
      .attr('fill', d => this.toRgba(d.data.color, .2));

    this.svg
      .selectAll('current-slices')
      .data<d3.PieArcDatum<DonutChartDatum>>(currentData)
      .enter()
      .append('path')
      .attr('d', this.arc)
      .attr('class', 'donut-arc current-slices')
      .attr('fill', d => d.data.color);

    /*
    slice
      .transition().duration(1000)
      .attrTween('d', d => {
        this._current = this._current || d;
        let interpolate = d3.interpolate(this._current, d);
        this._current = interpolate(0);
        return t => this.innerArc(interpolate(t));
        }
      });

    slice.exit()
      .remove();
     */

  }
}
/*
var pie = d3.layout.pie()
  .sort(null)
  .value(function(d) {
    return d.value;
  });

var arc = d3.svg.arc()
  .outerRadius(radius * 0.8)
  .innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9);

svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var key = function(d){ return d.data.label; };

var color = d3.scale.ordinal()
  .domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"])
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

function randomData (){
  var labels = color.domain();
  return labels.map(function(label){
    return { label: label, value: Math.random() }
  });
}

change(randomData());

d3.select(".randomize")
  .on("click", function(){
    change(randomData());
  });


function change(data) {

  // ------- PIE SLICES -------
  var slice = svg.select(".slices").selectAll("path.slice")
    .data(pie(data), key);

  slice.enter()
    .insert("path")
    .style("fill", function(d) { return color(d.data.label); })
    .attr("class", "slice");

  slice
    .transition().duration(1000)
    .attrTween("d", function(d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        return arc(interpolate(t));
      };
    });

  slice.exit()
    .remove();

  // ------- TEXT LABELS -------

  var text = svg.select(".labels").selectAll("text")
    .data(pie(data), key);

  text.enter()
    .append("text")
    .attr("dy", ".35em")
    .text(function(d) {
      return d.data.label;
    });

  function midAngle(d){
    return d.startAngle + (d.endAngle - d.startAngle)/2;
  }

  text.transition().duration(1000)
    .attrTween("transform", function(d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        var d2 = interpolate(t);
        var pos = outerArc.centroid(d2);
        pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
        return "translate("+ pos +")";
      };
    })
    .styleTween("text-anchor", function(d){
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        var d2 = interpolate(t);
        return midAngle(d2) < Math.PI ? "start":"end";
      };
    });

  text.exit()
    .remove();

  // ------- SLICE TO TEXT POLYLINES -------

  var polyline = svg.select(".lines").selectAll("polyline")
    .data(pie(data), key);

  polyline.enter()
    .append("polyline");

  polyline.transition().duration(1000)
    .attrTween("points", function(d){
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        var d2 = interpolate(t);
        var pos = outerArc.centroid(d2);
        pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
        return [arc.centroid(d2), outerArc.centroid(d2), pos];
      };
    });

  polyline.exit()
    .remove();
};
*/
