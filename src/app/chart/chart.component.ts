import {OnInit, Input, Component} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  sometext = 'Here is text from ChartComponent class';

  constructor() {
  }

  ngOnInit() {
    /** building chartLine example */
    const margin = {top: 20, right: 80, bottom: 30, left: 50};
    const width = 960;
    const height = 500;
    const svg = d3.select('p').append('svg');
    svg.attr('width', width)
      .attr('height', height);
    svg.style('border', 'solid 2px');
    const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    const parseTime = d3.timeParse('%Y%m%d');
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleOrdinal().range([height, 0]);
    const z = d3.scaleOrdinal(d3.schemeCategory10);
    /** Make ChartComponent, import d3
     *  TODO
     *1. Make chart Area
     * 2. Make Line
     * 3. Read paireChart form JSON
     * 4. Make Lines with different pairs
     * 5. Read data from response
     * */
  }
}
