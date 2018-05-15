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

  data;
  chart;

  constructor() { }

  ngAfterViewInit() {
    this.data = _data;

    const Highcharts = window['Highcharts'];

    // Create the chart
    this.chart = new Highcharts.stockChart('chart8Container', {
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

      series: this.data[this.roomType]
    });
  }

  ngOnChanges(event) {
    if (this.data) {
      if (event.roomType.currentValue) {
        this.roomType = event.roomType.currentValue;
      }
      console.log('changed: ', this.data[this.roomType]);
      // tslint:disable-next-line:forin
      for (const num in this.data[this.roomType]) {
        console.log('num: ', num);
        try {
          this.chart.series[num].setData(this.data[this.roomType][num]['data']);
        } catch (e) {
          console.error(e);
        }
      }

      // if (this.chart) {
      //   this.chart.series.forEach((element, index, arr) => {
      //     if (this.data[this.roomType][index]) {
      //       console.log('arr: ', index, this.data[this.roomType][index]);
      //       try {
      //         arr[index].setData(this.data[this.roomType][index]['data']);
      //       } catch (e) {
      //         console.log('error: ', e);
      //       }
      //     }
      //   });
      this.chart.redraw();
    }
    // this.sChart.nativeElement.highCharts().series[0].set( _data[event.currentValue], false);
  }
}

