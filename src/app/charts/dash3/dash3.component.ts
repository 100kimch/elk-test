import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dash3',
  templateUrl: './dash3.component.html',
  styleUrls: ['./dash3.component.css']
})
export class Dash3Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const Highcharts = window['Highcharts'];

    Highcharts.chart('chart3Container', {
      chart: {
        type: 'variablepie',
        backgroundColor: 'transparent'
      },
      colors: ['#737373', '#738A97'],
      title: {
        text: '<b>7201</b>/37000',
        verticalAlign: 'middle'
      },
      plotOptions: {
        variablepie: {
          dataLabels: {
            connectorWidth: 0,
            distance: 0
          },
          size: 400
        }
      },
      tooltip: {
        headerFormat: 'Hello',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Value : <b>{point.y}</b><br/>'
      },
      series: [{
        minPointSize: 30,
        innerSize: '40%',
        zMin: 0,
        name: 'Amount',
        data: [{
          'name': 'Quantity',
          'y': 7201
        }, {
            'name': 'Price Quantity',
          'y': 36799
        }]
      }]
    });
  }

}
