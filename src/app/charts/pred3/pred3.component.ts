import { Component, AfterViewInit } from '@angular/core';
import * as _data from '../../../assets/data/pred3.json';

@Component({
  selector: 'app-pred3',
  templateUrl: './pred3.component.html',
  styleUrls: ['./pred3.component.css']
})
export class Pred3Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {


    const data = _data;
    // Create a timer
    var start = +new Date();

    const Highcharts = window['Highcharts'];
    // Create the chart
    Highcharts.stockChart('chart10Container', {
      chart: {
        events: {
          load: function () {
            if (!window['TestController']) {
              this.setTitle(null, {
                text: null
                // text: 'Built chart in ' + (new Date() - start).toString() + 'ms'
              });
            }
          }
        },
        zoomType: 'x',
        backgroundColor: 'transparent',
        height: '605px'
      },

      rangeSelector: {

        buttons: [{
          type: 'day',
          count: 3,
          text: '3d'
        }, {
          type: 'week',
          count: 1,
          text: '1w'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'month',
          count: 6,
          text: '6m'
        }, {
          type: 'year',
          count: 1,
          text: '1y'
        }, {
          type: 'all',
          text: 'All'
        }],
        selected: 3
      },

      yAxis: {
        title: {
          text: 'Revenue'
        }
      },

      title: {
        text: 'Total Revenue'
      },

      subtitle: {
      },

      series: [{
        name: 'Revenue',
        data: data['data'],
        pointStart: data['pointStart'],
        pointInterval: data['pointInterval'],
        tooltip: {
          valueDecimals: 1,
          valueSuffix: ''
        }
      }]

    });
}

}
