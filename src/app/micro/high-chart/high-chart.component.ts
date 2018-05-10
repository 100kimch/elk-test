import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as priceList from '../../../assets/data/sample2.json';

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit, AfterViewInit {
  seriesOptions = priceList['Standard'];
  seriesCounter = 0;
  names = ['MSFT', 'AAPL', 'GOOG'];

  @ViewChild('chartTarget') chartTarget: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    window['Highcharts'].stockChart('chartContainer', {
      chart: {
        backgroundColor: '#eee'
      },

      rangeSelector: {
        selected: 4
      },

      yAxis: {
        labels: {
          formatter: function () {
            return (this.value > 0 ? ' + ' : '') + this.value + '%';
          }
        },
        plotLines: [{
          value: 0,
          width: 2,
          color: 'silver'
        }]
      },

      plotOptions: {
        series: {
          compare: 'percent',
          showInNavigator: true
        }
      },

      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2,
        split: true
      },

      series: this.seriesOptions
    });
  }
}
