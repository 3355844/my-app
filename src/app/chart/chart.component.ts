import {OnInit, ElementRef, Input, Injectable, Component} from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import {Pair} from './shared';
import {keys, line} from 'd3';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  namePair = 'BTC - USD';

  data: any;
  svg: any;
  margin = {top: 20, right: 80, bottom: 30, left: 50};
  g: any;
  width: number;
  height: number;
  x;
  y;
  line;

  constructor() {
  }

  ngOnInit() {

    this.data = Pair.map((v) => v);
    this.initChart();
    this.drawAxis();
    this.drawPath();
  }

  private initChart(): void {
    this.svg = d3.select('svg');

    this.width = this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = this.svg.attr('height') - this.margin.top - this.margin.bottom;

    this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);

    this.line = d3Shape.line()
      .curve(d3Shape.curveBasis)
      .x((d: any) => this.x(new Date(d.name)))
      .y((d: any) => this.y(d.value));

    this.x.domain([
      d3Array.min(Pair, function (c) {
        return d3Array.min(c.BTC_USD, function (d) {
          return new Date(d.name);
        });
      }),
      d3Array.max(Pair, function (c) {
        return d3Array.max(c.BTC_USD, function (d) {
          return new Date(d.name);
        });
      })
    ]);

    this.y.domain([
      d3Array.min(Pair, function (c) {
        return d3Array.min(c.BTC_USD, function (d) {
          return d.value;
        });
      }),
      d3Array.max(Pair, function (c) {
        return d3Array.max(c.BTC_USD, function (d) {
          return d.value;
        });
      })
    ]);

  }

  private drawAxis(): void {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('fill', '#000')
      .text('Price for 1 BTC in 1000 USD');
  }

  private drawPath(): void {
    let pair = this.g.selectAll('.pair')
      .data(Pair)
      .enter().append('g')
      .attr('class', 'pair');

    pair.append('path')
      .attr('class', 'line')
      .attr('d', (d) => this.line(d.BTC_USD));

    pair.append('text')
      .datum(function (d) {
        return {id: 'BTC_USD', value: d.BTC_USD[d.BTC_USD.length - 1]};
      })
      .attr('transform', (d) => 'translate(' + this.x(d.value.name) + ',' + this.y(d.value.value) + ')')
      .attr('x', 3)
      .attr('dy', '0.35em')
      .style('font', '10px sans-serif');
  }
}
