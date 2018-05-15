import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dash6',
  templateUrl: './dash6.component.html',
  styleUrls: ['./dash6.component.css']
})
export class Dash6Component implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {

    const Highcharts = window['Highcharts'];

    Highcharts.chart('chart6Container', {
      chart: {
        type: 'bar',
        backgroundColor: 'transparent'
      },
      colors: ['#A97541', '#6F61CB', '#737373', '#CB9761', '#62B88E', '#738A97'],
      title: {
        text: null
      },
      xAxis: {
        categories: ['Reserved', 'Sales', 'Revenue']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Assets'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        },
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [
        {
          name: 'Not Available',
          data: [15, 0, 0]
        },
        {
          name: 'Available',
          data: [7, 0, 0]
        },
        {
          name: 'Sales',
          data: [185, 0, 0]
        },
        {
          name: 'Block Sales',
          data: [0, 57, 35]
        },
        {
          name: 'Offline',
          data: [0, 62, 71]
        },
        {
          name: 'Online',
          data: [0, 73, 53]
        },
      ],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    });
  }

}
