import {Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit} from '@angular/core';
import * as d3 from 'd3';
@Component({
})
export class ChartComponent implements OnInit, AfterViewInit {

  constructor() {
    /** Here will put data about chart */
    const MARGIN = {top: 20, right: 80, bottom: 30, left: 50};
    const WIDTH = 960;
    const HEIGTH = 500;
  }

  ngOnInit(): void {
    d3.select('p').text('here is class Chart');
  }

  ngAfterViewInit(): void {
  }
}
