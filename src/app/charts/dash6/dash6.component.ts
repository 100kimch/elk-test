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
      colors: ['#A97541', '#6F61CB', '#737373'],
      title: {
        text: null
      },
      xAxis: {
        categories: ['Profit', 'Revenue', 'Property']
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
        }
      },
      series: [{
        name: 'Profit',
        data: [5, 3, 4]
      }, {
        name: 'Revenue',
        data: [2, 2, 3]
      }, {
        name: 'Property',
        data: [3, 4, 4]
      }]
    });
  }

}
