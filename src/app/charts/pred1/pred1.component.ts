import { Component, AfterViewInit, OnChanges, Input, ViewChild } from '@angular/core';
import * as _data from '../../../assets/data/pred1.json';

@Component({
  selector: 'app-pred1',
  templateUrl: './pred1.component.html',
  styleUrls: ['./pred1.component.css']
})
export class Pred1Component implements AfterViewInit, OnChanges {
  @Input('roomType') roomType;
  @ViewChild('chart') sChart;

  chart;

  constructor() { }

  ngAfterViewInit() {
    const data = _data[this.roomType];

    const Highcharts = window['Highcharts'];

    // Create the chart
    this.chart = new Highcharts.stockChart('chart8Container', {
      chart: {
        backgroundColor: 'transparent',
        spacingLeft: 20,
        spacingRight: 40,
        type: 'line'
      },
      plotOptions: {
        lineWidth: 5
      },

      legend: {
        enabled: true
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
          value: 1523036800000,
          color: '#CB6161',
          dashStyle: 'shortdash',
          width: 2,
          label: {
            text: 'Today'
          }
        }],
        tickPosition: 'inside',
        startOnTick: true
      },

      label: {

      },

      series: data
    });
  }

  ngOnChanges(event) {
    const roomType = event.roomType.currentValue;
    console.log('changed: ', _data[roomType][0]['data']);
    if (this.chart) {
      this.chart.series.forEach((element, index, arr) => {
        console.log(arr);
        try {
          arr[index].setData(_data[roomType][index]['data']);
        } catch (e) {
        }
      });
      this.chart.redraw();
    }
    // this.sChart.nativeElement.highCharts().series[0].set( _data[event.currentValue], false);
  }
}
