import {AfterContentInit, Component} from '@angular/core';
import APP_CONFIG from './app.config';
import {Node, Link} from './d3';
import * as d3 from 'd3';

// import {type} from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterContentInit {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

  /** building chartLine example */
  ngAfterContentInit(): void {
    const margin = {top: 20, right: 80, bottom: 30, left: 50};
    const width = 960;
    const height = 500;
    const svg = d3.select('#chartArea');
    svg.attr('width', width)
      .attr('height', height);
    svg.style('border', 'solid 1px');
    const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    const parseTime = d3.timeParse('%Y%m%d');
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleOrdinal().range([height, 0]);
    const z = d3.scaleOrdinal(d3.schemeCategory10);
    /** Here will be line building  Example: https://bl.ocks.org/mbostock/3884955
     * here one more example https://bl.ocks.org/mbostock/1166403 */
  }
}
