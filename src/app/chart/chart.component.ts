///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {OnInit, ElementRef, Input, Injectable, Component} from '@angular/core';
import {HttpClient, HttpHanders} from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  sometext = 'Here is text from ChartComponent class ';
  body: string;
  private HttpClient: HttpClient;
  el: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    this.drawChart();
    // /** Building chartLine example */
    // let margin = {top: 20, right: 20, bottom: 20, left: 20};
    // let width = 960 - margin.left - margin.right;
    // let height = 500 - margin.top - margin.bottom;
    // /** Set the ranges */
    // let x = d3.scaleLinear<number>().range([0, width]);
    // let y = d3.scaleLinear<number>().range([height, 0]);
    // /** Append svg to Component */
    // let svg = d3.select('#chartLine').append('svg')
    //   .attr('width', width + margin.left + margin.right)
    //   .attr('height', height + margin.top + margin.bottom)
    //   .append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    // /** Get Data as JSON (just for try...)*/
    // let data = [{
    //   'BTC_USD': [
    //     {
    //       'name': '2018-04-19T08:00:00.608Z',
    //       'value': 8222.9
    //     },
    //     {
    //       'name': '2018-04-19T10:00:00.6010Z',
    //       'value': 8235.2
    //     },
    //     {
    //       'name': '2018-04-19T15:00:00.603Z',
    //       'value': 8284.2
    //     },
    //     {
    //       'name': '2018-04-19T20:00:00.608Z',
    //       'value': 8359.1
    //     },
    //     {
    //       'name': '2018-04-20T01:00:00.601Z',
    //       'value': 8380
    //     },
    //     {
    //       'name': '2018-04-20T06:00:00.606Z',
    //       'value': 8540
    //     },
    //     {
    //       'name': '2018-04-20T11:00:00.6011Z',
    //       'value': 8567
    //     },
    //     {
    //       'name': '2018-04-20T16:00:00.604Z',
    //       'value': 8576
    //     },
    //     {
    //       'name': '2018-04-20T21:00:00.609Z',
    //       'value': 8940
    //     },
    //     {
    //       'name': '2018-04-21T02:00:00.602Z',
    //       'value': 8994
    //     },
    //     {
    //       'name': '2018-04-21T07:00:00.607Z',
    //       'value': 9110.4
    //     },
    //     {
    //       'name': '2018-04-21T12:00:00.6012Z',
    //       'value': 8925
    //     },
    //     {
    //       'name': '2018-04-21T17:00:00.605Z',
    //       'value': 8854.1
    //     },
    //     {
    //       'name': '2018-04-21T22:00:00.6010Z',
    //       'value': 8909.1
    //     },
    //     {
    //       'name': '2018-04-23T00:00:00.6012Z',
    //       'value': 8890
    //     },
    //     {
    //       'name': '2018-04-23T04:00:00.604Z',
    //       'value': 8984.8
    //     },
    //     {
    //       'name': '2018-04-23T09:00:00.609Z',
    //       'value': 8988.7
    //     },
    //     {
    //       'name': '2018-04-23T14:00:00.602Z',
    //       'value': 8936.6
    //     },
    //     {
    //       'name': '2018-04-23T19:00:00.607Z',
    //       'value': 8948.7
    //     },
    //     {
    //       'name': '2018-04-24T00:00:00.6012Z',
    //       'value': 9235.1
    //     },
    //     {
    //       'name': '2018-04-24T05:00:00.605Z',
    //       'value': 9293.4
    //     },
    //     {
    //       'name': '2018-04-24T10:00:00.6010Z',
    //       'value': 9399.6
    //     },
    //     {
    //       'name': '2018-04-24T15:00:00.603Z',
    //       'value': 9469
    //     },
    //     {
    //       'name': '2018-04-24T20:00:00.608Z',
    //       'value': 9697
    //     },
    //     {
    //       'name': '2018-04-25T01:00:00.601Z',
    //       'value': 9724.5
    //     },
    //     {
    //       'name': '2018-04-25T06:00:00.606Z',
    //       'value': 9498.8
    //     },
    //     {
    //       'name': '2018-04-25T11:00:00.6011Z',
    //       'value': 9239.2
    //     },
    //     {
    //       'name': '2018-04-25T16:00:00.604Z',
    //       'value': 9145
    //     },
    //     {
    //       'name': '2018-04-25T21:00:00.609Z',
    //       'value': 9196
    //     },
    //     {
    //       'name': '2018-04-26T02:00:00.602Z',
    //       'value': 8990.3
    //     },
    //     {
    //       'name': '2018-04-26T07:00:00.607Z',
    //       'value': 8895
    //     }
    //   ],
    //   'ZEC_BTC': [
    //     {
    //       'name': '2018-04-19T08:00:00.608Z',
    //       'value': 0.029515000000000003
    //     },
    //     {
    //       'name': '2018-04-19T10:00:00.6010Z',
    //       'value': 0.030545
    //     },
    //     {
    //       'name': '2018-04-19T16:00:00.604Z',
    //       'value': 0.031155000000000002
    //     },
    //     {
    //       'name': '2018-04-19T20:00:00.608Z',
    //       'value': 0.031893000000000005
    //     },
    //     {
    //       'name': '2018-04-20T02:00:00.602Z',
    //       'value': 0.031547
    //     },
    //     {
    //       'name': '2018-04-20T06:00:00.606Z',
    //       'value': 0.031211999999999997
    //     },
    //     {
    //       'name': '2018-04-20T11:00:00.6011Z',
    //       'value': 0.031211999999999997
    //     },
    //     {
    //       'name': '2018-04-20T17:00:00.605Z',
    //       'value': 0.032544
    //     },
    //     {
    //       'name': '2018-04-20T21:00:00.609Z',
    //       'value': 0.033101000000000005
    //     },
    //     {
    //       'name': '2018-04-21T02:00:00.602Z',
    //       'value': 0.031
    //     },
    //     {
    //       'name': '2018-04-21T07:00:00.607Z',
    //       'value': 0.031204
    //     },
    //     {
    //       'name': '2018-04-21T12:00:00.6012Z',
    //       'value': 0.029677000000000002
    //     },
    //     {
    //       'name': '2018-04-21T18:00:00.606Z',
    //       'value': 0.030295999999999997
    //     },
    //     {
    //       'name': '2018-04-22T00:00:00.6012Z',
    //       'value': 0.030101
    //     },
    //     {
    //       'name': '2018-04-22T03:00:00.603Z',
    //       'value': 0.030767
    //     },
    //     {
    //       'name': '2018-04-22T08:00:00.608Z',
    //       'value': 0.03111
    //     },
    //     {
    //       'name': '2018-04-22T13:00:00.601Z',
    //       'value': 0.030913
    //     },
    //     {
    //       'name': '2018-04-22T18:00:00.606Z',
    //       'value': 0.03101
    //     },
    //     {
    //       'name': '2018-04-23T00:00:00.6012Z',
    //       'value': 0.030876999999999998
    //     },
    //     {
    //       'name': '2018-04-23T04:00:00.604Z',
    //       'value': 0.03125
    //     },
    //     {
    //       'name': '2018-04-23T09:00:00.609Z',
    //       'value': 0.032006
    //     },
    //     {
    //       'name': '2018-04-23T14:00:00.602Z',
    //       'value': 0.032213000000000006
    //     },
    //     {
    //       'name': '2018-04-23T19:00:00.607Z',
    //       'value': 0.033096
    //     },
    //     {
    //       'name': '2018-04-24T00:00:00.6012Z',
    //       'value': 0.033305
    //     },
    //     {
    //       'name': '2018-04-24T05:00:00.605Z',
    //       'value': 0.033005
    //     },
    //     {
    //       'name': '2018-04-24T10:00:00.6010Z',
    //       'value': 0.03383900000000001
    //     },
    //     {
    //       'name': '2018-04-24T15:00:00.603Z',
    //       'value': 0.03465700000000001
    //     },
    //     {
    //       'name': '2018-04-24T20:00:00.608Z',
    //       'value': 0.03431200000000001
    //     },
    //     {
    //       'name': '2018-04-25T02:00:00.602Z',
    //       'value': 0.03177
    //     },
    //     {
    //       'name': '2018-04-25T06:00:00.606Z',
    //       'value': 0.031332000000000006
    //     },
    //     {
    //       'name': '2018-04-25T11:00:00.6011Z',
    //       'value': 0.030552
    //     },
    //     {
    //       'name': '2018-04-25T16:00:00.604Z',
    //       'value': 0.032130000000000006
    //     },
    //     {
    //       'name': '2018-04-25T22:00:00.6010Z',
    //       'value': 0.032842
    //     },
    //     {
    //       'name': '2018-04-26T03:00:00.603Z',
    //       'value': 0.032158000000000006
    //     }
    //   ],
    //   'ZEC_GBP': [
    //     {
    //       'name': '2018-04-19T12:00:00.6012Z',
    //       'value': 174.59
    //     },
    //     {
    //       'name': '2018-04-19T15:00:00.603Z',
    //       'value': 181.87
    //     },
    //     {
    //       'name': '2018-04-20T08:00:00.608Z',
    //       'value': 186.69
    //     },
    //     {
    //       'name': '2018-04-20T20:00:00.608Z',
    //       'value': 201.67
    //     },
    //     {
    //       'name': '2018-04-20T22:00:00.6010Z',
    //       'value': 202
    //     },
    //     {
    //       'name': '2018-04-21T10:00:00.6010Z',
    //       'value': 186.98000000000002
    //     },
    //     {
    //       'name': '2018-04-23T11:00:00.6011Z',
    //       'value': 195.84
    //     },
    //     {
    //       'name': '2018-04-23T19:00:00.607Z',
    //       'value': 215.06
    //     },
    //     {
    //       'name': '2018-04-25T03:00:00.603Z',
    //       'value': 217.3
    //     },
    //     {
    //       'name': '2018-04-25T11:00:00.6011Z',
    //       'value': 195.10999999999999
    //     },
    //     {
    //       'name': '2018-04-25T20:00:00.608Z',
    //       'value': 214
    //     },
    //     {
    //       'name': '2018-04-25T23:00:00.6011Z',
    //       'value': 214.41
    //     }
    //   ]
    // }];
    // /** First try*/
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

  drawChart() {
  }
}
