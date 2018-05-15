import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dash1',
  templateUrl: './dash1.component.html',
  styleUrls: ['./dash1.component.css']
})
export class Dash1Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const Highcharts = window['Highcharts'];

    Highcharts.chart('chart1Container', {
      chart: {
        type: 'variablepie',
        backgroundColor: 'transparent'
      },
      colors: ['#CB6161', '#ED8383'],
      title: {
        text: '<p>7 Available</p>',
        verticalAlign: 'middle'
      },
      plotOptions: {
        variablepie: {
          dataLabels: {
            connectorWidth: 0,
            distance: 0,
            padding: 0
          },
          size: '400'
        }
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Value : <b>{point.y}</b><br/>'
      },
      series: [{
        minPointSize: 30,
        innerSize: '40%',
        zMin: 0,
        name: 'Amount',
        data: [{
          'name': 'Avg. Week',
          'y': 12
        }]
      },
      {
        minPointSize: 10,
        innerSize: '60%',
        zMin: 0,
        name: 'Amount',
        data: [{
          'name': 'Available',
          'y': 7
        }]
      }]
    });
  }

}
