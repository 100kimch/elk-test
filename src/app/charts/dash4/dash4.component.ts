import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dash4',
  templateUrl: './dash4.component.html',
  styleUrls: ['./dash4.component.css']
})
export class Dash4Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const Highcharts = window['Highcharts'];

    Highcharts.chart('chart4Container', {
      chart: {
        type: 'variablepie',
        backgroundColor: 'transparent'
      },
      colors: ['#A97541', '#ECB983'],
      title: {
        text: '<b>1: 1.25</b>',
        verticalAlign: 'middle'
      },
      plotOptions: {
        variablepie: {
          dataLabels: {
            connectorWidth: 0,
            distance: 0,
            padding: 0
          },
          size: 180
        }
      },
      tooltip: {
        headerFormat: 'Hello',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Value : <b>{point.y}</b><br/>'
      },
      series: [{
        minPointSize: 30,
        innerSize: '90%',
        zMin: 0,
        name: 'Amount',
        data: [{
          'name': 'Avg.High',
          'y': 57000
        }, {
          'name': 'Avg.Low',
          'y': 42000
        }]
      }]
    });
  }

}
