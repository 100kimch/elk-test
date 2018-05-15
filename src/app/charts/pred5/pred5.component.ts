import { Component, AfterViewInit } from '@angular/core';
import * as _data from '../../../assets/data/pred5.json';

@Component({
  selector: 'app-pred5',
  templateUrl: './pred5.component.html',
  styleUrls: ['./pred5.component.css']
})
export class Pred5Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {

    const data = _data;
    const Highcharts = window['Highcharts'];
    Highcharts.chart('chart12Container', {
      chart: {
        zoomType: 'x',
        backgroundColor: 'transparent',
        height: '280px'
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: 'USD to EUR',
        data: data
      }]
    });
  }

}
