import { Component, AfterViewInit } from '@angular/core';
import * as _data from '../../../assets/data/dash6.json';

@Component({
  selector: 'app-dash7',
  templateUrl: './dash7.component.html',
  styleUrls: ['./dash7.component.css']
})
export class Dash7Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const data = _data;

    const Highcharts = window['Highcharts'];

    // Create the chart
    Highcharts['stockChart']('chart7Container', {
      chart: {
        backgroundColor: 'transparent',
        spacingLeft: 20,
        spacingRight: 40,
        type: 'line'
      },
      plotOptions: {
        lineWidth: 5
      },

      colors: ['#A97541', '#6F61CB', '#737373'],

      rangeSelector: {
        selected: 1
      },

      title: {
        text: null,
      },

      xAxis: {
        title: {
          text: null,
        },
        plotLines: [{
          value: 1513036800000,
          color: '#CB6161',
          dashStyle: 'shortdash',
          width: 2,
          label: {
            text: 'Today'
          }
        }]
      },

      series: data
    });
  }

}
