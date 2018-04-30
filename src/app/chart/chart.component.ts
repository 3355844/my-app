import {OnInit, Input, Injectable, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  sometext = 'Here is text from ChartComponent class ';
  body: string;
  private HttpClient: HttpClient;

  constructor() {
  }

  ngOnInit() {
    /** Building chartLine example */
    let margin = {top: 20, right: 20, bottom: 20, left: 20};
    let width = 960 - margin.left - margin.right;
    let height = 500 - margin.top - margin.bottom;
    /** Set the ranges */
    let x = d3.scaleTime().range([0, width]);
    let y = d3.scaleLinear().range([height, 0]);
    /** Line */
    let valueLine = d3.line();
    valueLine.x(function (d) {
      return d.year;
    });
    valueLine.y(function (d) {
      return d.population;
    });
    /** Append svg to Component */
    let svg = d3.select('#chartLine').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    /** Get data*/
    this.HttpClient.get('http://144.76.65.130:8000/api/v1/test')
      .subscribe((res: any[]) => {
        console.log(res);
      });

    /** First try*/
    // let margin = {top: 20, right: 80, bottom: 30, left: 50};
    // let width = 960 - margin.left - margin.right;
    // let height = 500 - margin.bottom - margin.top;
    // let svg = d3.select('p').append('svg');
    // svg.attr('width', width)
    //   .attr('height', height)
    //   .append('g')
    //   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    // /** Parse date / time*/
    // let parseTime = d3.timeParse('%y');
    // /** set the ranges*/
    // let x = d3.scaleTime().range([0, width]);
    // let y = d3.scaleLinear().range([height, 0]);
    // /**  Crate line */
    // svg.append('line')
    //   .attr('x', 150)
    //   .attr('y', 250);

    // const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    // const parseTime = d3.timeParse('%Y%m%d');
    // const x = d3.scaleTime().range([0, width]);
    // const y = d3.scaleOrdinal().range([height, 0]);
    // const z = d3.scaleOrdinal(d3.schemeCategory10);
    /** Make ChartComponent, import d3
     *  TODO
     * 1. Make chart Area
     * 2. Make Line
     * 3. Read pairChart form JSON
     * 4. Make Lines with different pairs
     * 5. Read data from response
     * */
  }
}
