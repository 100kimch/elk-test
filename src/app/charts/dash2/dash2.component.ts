import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dash2',
  templateUrl: './dash2.component.html',
  styleUrls: ['./dash2.component.css']
})
export class Dash2Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const Highcharts = window['Highcharts'];

    Highcharts.chart('chart2Container', {
      chart: {
        type: 'variablepie',
        backgroundColor: 'transparent'
      },
      colors: ['#6F61CB', '#A196EB'],
      title: {
        text: 'Total: 192',
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
          'name': 'Quantity',
          'y': 192
        }, {
          'name': 'Block Sales',
          'y': 57
        }]
      }]
    });
}

}
