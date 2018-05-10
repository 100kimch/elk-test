import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dash5',
  templateUrl: './dash5.component.html',
  styleUrls: ['./dash5.component.css']
})
export class Dash5Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const Highcharts = window['Highcharts'];

    Highcharts.chart('chart5Container', {
      chart: {
        type: 'variablepie',
        backgroundColor: 'transparent'
      },
      colors: ['#cccccc'],
      title: {
        text: '',
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
          'Value : <b>{point.z}</b><br/>'
      },
      series: [{
        minPointSize: 30,
        innerSize: '90%',
        zMin: 0,
        name: 'Amount',
        data: [{
          'name': 'Cost',
          'y': 1,
          'z': 0
        }]
      }]
    });
  }

}
