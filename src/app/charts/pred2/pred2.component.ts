import { Component, AfterViewInit, OnChanges, Input, ViewChild } from '@angular/core';
import * as _data from '../../../assets/data/pred2.json';

@Component({
  selector: 'app-pred2',
  templateUrl: './pred2.component.html',
  styleUrls: ['./pred2.component.css']
})
export class Pred2Component implements AfterViewInit, OnChanges {
  @Input('roomType') roomType;
  @ViewChild('chart') sChart;

  chart;
  data;

  constructor() { }

  ngAfterViewInit() {
    const data = _data[this.roomType];

    const Highcharts = window['Highcharts'];

    // Create the chart
    this.chart = new Highcharts.stockChart('chart9Container', {
      chart: {
        backgroundColor: 'transparent',
        spacingLeft: 20,
        spacingRight: 40,
        type: 'line',
        height: '400px'
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
          value: 1514036800000,
          color: '#CB6161',
          dashStyle: 'shortdash',
          width: 2,
          label: {
            text: 'Today'
          }
        }],
        tickPosition: 'inside',
        startOnTick: true,
      },

      navigator: {
        xAxis: {
          softMin: 0,
          tickPixelInterval: 10
        }
      },

      series: data
    });
  }

  ngOnChanges(event) {
    if (this.data) {
      const roomType = event;
      console.log('roomType: ', roomType);
      console.log('changed: ', this.data[roomType][0]['data']);
      if (this.chart) {
        this.chart.series.forEach((element, index, arr) => {
          console.log(arr);
          try {
            arr[index].setData(this.data[roomType][index]['data']);
          } catch (e) {
          }
        });
        this.chart.redraw();
      }
      // this.sChart.nativeElement.highCharts().series[0].set( _data[event.currentValue], false);
    }
  }

}
