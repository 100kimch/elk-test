import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fusion-chart',
  templateUrl: './fusion-chart.component.html',
  styleUrls: ['./fusion-chart.component.css']
})
export class FusionChartComponent implements OnInit, OnChanges {
  id;
  width;
  height;
  type;
  dataFormat = 'json';
  dataSource;
  @Input('gid') gid;
  @Input('priceList') priceList;
  @Input('chartDataType') chartDataType;

  chartType = {
    'dash_1': {
      type: 'doughnut2d',
      renderAt: 'chart-container',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "numberPrefix": "",
          "paletteColors": "#CB6161",
          "showBorder": "1",
          "use3DLighting": "0",
          "showShadow": "0",
          "enableSmartLabels": "1",
          "startingAngle": "310",
          "showLabels": "1",
          "showPercentValues": "0",
          "showLegend": "0",
          "legendShadow": "0",
          "legendBorderAlpha": "0",
          "defaultCenterLabel": "2 Quantity",
          "centerLabelBold": "1",
          
          "showTooltip": "0",
          "decimals": "0",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0"
        },
        "data": [
          {
            "label": "Avg. Rooms",
            "value": "6"
          }
        ]
      },
    },
    'dash_2': {
      type: 'doughnut2d',
      renderAt: 'chart-container',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "numberPrefix": "$",
          "paletteColors": "#6F61CB, #A196EB",
          "showBorder": "1",
          "use3DLighting": "0",
          "showShadow": "0",
          "enableSmartLabels": "1",
          "startingAngle": "310",
          "showLabels": "1",
          "showPercentValues": "1",
          "showLegend": "0",
          "legendShadow": "0",
          "legendBorderAlpha": "0",
          "defaultCenterLabel": "Total revenue: $64.08K",
          "centerLabel": "Revenue from $label: $value",
          "centerLabelBold": "1",
          "showTooltip": "0",
          "decimals": "0",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0"
        },
        "data": [
          {
            "label": "Quantity",
            "value": "121"
          },
          {
            "label": "Block Sales",
            "value": "28"
          },
        ]
      },
    },
    'dash_3': {
      type: 'doughnut2d',
      renderAt: 'chart-container',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "numberPrefix": "$",
          "paletteColors": "#737373, #738A97",
          "showBorder": "1",
          "use3DLighting": "0",
          "showShadow": "0",
          "enableSmartLabels": "1",
          "startingAngle": "310",
          "showLabels": "1",
          "showPercentValues": "1",
          "showLegend": "0",
          "legendShadow": "0",
          "legendBorderAlpha": "0",
          "defaultCenterLabel": "Total revenue: $64.08K",
          "centerLabel": "Revenue from $label: $value",
          "centerLabelBold": "1",
          "showTooltip": "0",
          "decimals": "0",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0"
        },
        "data": [
          {
            "label": "Quantity",
            "value": "7201"
          },
          {
            "label": "Price Quantity",
            "value": "36799"
          }
        ]
      },
    },
    'dash_4': {
      type: 'doughnut2d',
      renderAt: 'chart-container',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "numberPrefix": "$",
          "paletteColors": "#A97541, #ECB983",
          "showBorder": "1",
          "use3DLighting": "0",
          "showShadow": "0",
          "enableSmartLabels": "1",
          "startingAngle": "90",
          "showLabels": "1",
          "showPercentValues": "1",
          "showLegend": "0",
          "legendShadow": "0",
          "legendBorderAlpha": "0",
          "centerLabelBold": "1",
          "showTooltip": "0",
          "decimals": "0",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0"
        },
        "data": [
          {
            "label": "Avg. High",
            "value": "0.62"
          },
          {
            "label": "Avg.Row",
            "value": "0.38"
          }
        ]
      },
    },
    'dash_5': {
      type: 'doughnut2d',
      renderAt: 'chart-container',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "numberPrefix": "$",
          "paletteColors": "#dddddd",
          "showBorder": "1",
          "use3DLighting": "0",
          "showShadow": "0",
          "enableSmartLabels": "1",
          "startingAngle": "310",
          "showLabels": "1",
          "showPercentValues": "1",
          "showLegend": "0",
          "legendShadow": "0",
          "legendBorderAlpha": "0",
          "defaultCenterLabel": "0 Own Cost",
          "centerLabelBold": "1",
          "showTooltip": "0",
          "decimals": "0",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0"
        },
        "data": [
          {
            "label": "None",
            "value": "1"
          }
        ]
      },
    },
    'dash_6': {
      type: 'bar2d',
      renderAt: 'chart-container',
      width: '100%',
      height: '450',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "yAxisName": "Sales (1,000￦)",
          "numberPrefix": "￦",
          "paletteColors": "#6465a2",
          "showBorder": "0",
          "showCanvasBorder": "0",
          "usePlotGradientColor": "0",
          "plotBorderAlpha": "10",
          "placeValuesInside": "1",
          "valueFontColor": "#ffffff",
          "showAxisLines": "1",
          "axisLineAlpha": "25",
          "divLineAlpha": "10",
          "alignCaptionWithCanvas": "0",
          "showAlternateVGridColor": "0",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "toolTipColor": "#ffffff",
          "toolTipBorderThickness": "0",
          "toolTipBgColor": "#000000",
          "toolTipBgAlpha": "80",
          "toolTipBorderRadius": "2",
          "toolTipPadding": "5"
        },

        "data": [
          {
            "label": "Profit",
            "value": "1.5"
          },
          {
            "label": "Revenue",
            "value": "3"
          },
          {
            "label": "Property",
            "value": "6"
          },
        ]
      }
    },
    'pred_1': {
      type: 'msline',
      renderAt: 'chart-container',
      width: '100%',
      height: '470',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "paletteColors": "#0075c2,#1aaf5d,#724FB2",
          "showBorder": "0",
          "showCaption": "1",
          "showShadow": "0",
          "showCanvasBorder": "0",
          "usePlotGradientColor": "0",
          "legendBorderAlpha": "0",
          "legendShadow": "0",
          "showAxisLines": "0",
          "showAlternateHGridColor": "0",
          "divlineThickness": "1",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1",
          "xAxisName": "Day",
          "showValues": "0"
        },
        "categories": [
          {
            "category": [
              { "label": "04/25" },
              { "label": "04/26" },
              { "label": "04/27" },
              { "label": "04/28" },
              { "label": "04/29" },
              { "label": "04/30" },
              { "label": "05/01" },
              { "label": "05/02" },
              { "label": "05/03" },
              { "label": "05/04" },
              { "label": "05/05" },
              { "label": "05/06" },
              { "label": "05/07" },
              { "label": "Today" },
              {
                "vline": "true",
                "lineposition": "0",
                "color": "#cc2222",
                "labelHAlign": "center",
                "labelPosition": "0",
                "label": "Today",
                "dashed": "1"
              },
            ]
          }
        ],
        "dataset": [
          {
            "seriesname": "Black Sands Hotel",
            "data": [
              { "value": "52455" },
              { "value": "55455" },
              { "value": "53000" },
              { "value": "50420" },
              { "value": "56909" },
              { "value": "56909" },
              { "value": "56909" },
              { "value": "52455" }
            ]
          },
          {
            "seriesname": "호텔 리젠트 마린 더 블루",
            "data": [
              { "value": "148224" },
              { "value": "71302" },
              { "value": "76167" },
              { "value": "78973" },
              { "value": "88325" },
              { "value": "88262" },
              { "value": "76167" },
              { "value": "76167" },
            ]
          },
          {
            "seriesname": "메종 글래드 제주",
            "data": [
              { "value": "101783" },
              { "value": "101783" },
              { "value": "107438" },
              { "value": "101783" },
              { "value": "108525" },
              { "value": "128099" },
              { "value": "101783" },
              { "value": "108525" },
            ]
          }
        ],
        "trendlines": [
          {
            // "line": [
            //   {
            //     "startvalue": "100000",
            //     "color": "#6baa01",
            //     "valueOnRight": "1",
            //     "displayvalue": "Average"
            //   }
            // ]
          }
        ]
      }
    },
    'pred_2': {
      type: 'msline',
      renderAt: 'chart-container',
      width: '100%',
      height: '470',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "paletteColors": "#0075c2,#1aaf5d,#724FB2",
          "showBorder": "0",
          "showShadow": "0",
          "showCanvasBorder": "0",
          "usePlotGradientColor": "0",
          "legendBorderAlpha": "0",
          "legendShadow": "0",
          "showAxisLines": "0",
          "showAlternateHGridColor": "0",
          "divlineThickness": "1",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1",
          "xAxisName": "Day",
          "showValues": "0"
        },
        "categories": [
          {
            "category": [
              { "label": "-6d" },
              { "label": "-5d" },
              { "label": "-4d" },
              { "label": "-3d" },
              { "label": "-2d" },
              { "label": "-1d" },
              { "label": "Today" },
              {
                "vline": "true",
                "lineposition": "0",
                "color": "#cc2222",
                "labelHAlign": "center",
                "labelPosition": "0",
                "label": "Today",
                "dashed": "1"
              },
              { "label": "+1d" },
              { "label": "+2d" },
              { "label": "+3d" },
              { "label": "+4d" },
              { "label": "+5d" },
              { "label": "+6d" },
            ]
          }
        ],
        "dataset": [
          {
            "seriesname": "Hotel A",
            "data": [
              { "value": "17000" },
              { "value": "19200" },
              { "value": "25000" },
              { "value": "27232" },
              { "value": "21222" },
              { "value": "19800" },
              { "value": "17234" },
              { "value": "18232" },
              { "value": "23232" },
              { "value": "27234" },
              { "value": "25242" },
              { "value": "21211" },
              { "value": "24211" },
            ]
          },
          {
            "seriesname": "Hotel B",
            "data": [
              { "value": "19800" },
              { "value": "21800" },
              { "value": "16800" },
              { "value": "17800" },
              { "value": "23800" },
              { "value": "24800" },
              { "value": "27100" },
              { "value": "23210" },
              { "value": "18230" },
              { "value": "17000" },
              { "value": "16000" },
              { "value": "16780" },
              { "value": "18000" },
            ]
          },
          {
            "seriesname": "Hotel C",
            "data": [
              { "value": "17000" },
              { "value": "17230" },
              { "value": "18230" },
              { "value": "24000" },
              { "value": "23000" },
              { "value": "23423" },
              { "value": "23000" },
              { "value": "23000" },
              { "value": "16200" },
              { "value": "18432" },
              { "value": "21232" },
              { "value": "22300" },
              { "value": "24300" },
            ]
          }
        ]
      }
    },
    'pred_3': {
      type: 'msline',
      renderAt: 'chart-container',
      width: '100%',
      height: '470',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "paletteColors": "#0075c2,#1aaf5d,#724FB2",
          "showBorder": "0",
          "showShadow": "0",
          "showCanvasBorder": "0",
          "usePlotGradientColor": "0",
          "legendBorderAlpha": "0",
          "legendShadow": "0",
          "showAxisLines": "0",
          "showAlternateHGridColor": "0",
          "divlineThickness": "1",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1",
          "xAxisName": "Day",
          "showValues": "0"
        },
        "categories": [
          {
            "category": [
              { "label": "-6d" },
              { "label": "-5d" },
              { "label": "-4d" },
              { "label": "-3d" },
              { "label": "-2d" },
              { "label": "-1d" },
              { "label": "Today" },
              {
                "vline": "true",
                "lineposition": "0",
                "color": "#cc2222",
                "labelHAlign": "center",
                "labelPosition": "0",
                "label": "Today",
                "dashed": "1"
              },
              { "label": "+1d" },
              { "label": "+2d" },
              { "label": "+3d" },
              { "label": "+4d" },
              { "label": "+5d" },
              { "label": "+6d" },
            ]
          }
        ],
        "dataset": [
          {
            "seriesname": "Hotel A",
            "data": [
              { "value": "17000" },
              { "value": "19200" },
              { "value": "25000" },
              { "value": "27232" },
              { "value": "21222" },
              { "value": "19800" },
              { "value": "17234" },
              { "value": "18232" },
              { "value": "23232" },
              { "value": "27234" },
              { "value": "25242" },
              { "value": "21211" },
              { "value": "24211" },
            ]
          },
          {
            "seriesname": "Hotel B",
            "data": [
              { "value": "19800" },
              { "value": "21800" },
              { "value": "16800" },
              { "value": "17800" },
              { "value": "23800" },
              { "value": "24800" },
              { "value": "27100" },
              { "value": "23210" },
              { "value": "18230" },
              { "value": "17000" },
              { "value": "16000" },
              { "value": "16780" },
              { "value": "18000" },
            ]
          },
          {
            "seriesname": "Hotel C",
            "data": [
              { "value": "17000" },
              { "value": "17230" },
              { "value": "18230" },
              { "value": "24000" },
              { "value": "23000" },
              { "value": "23423" },
              { "value": "23000" },
              { "value": "23000" },
              { "value": "16200" },
              { "value": "18432" },
              { "value": "21232" },
              { "value": "22300" },
              { "value": "24300" },
            ]
          }
        ]
      }
    },
    'pred_4': {
      type: 'scrollColumn2d',
      renderAt: 'chart-container',
      width: '100%',
      height: '200px',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "subcaption": "2017 - 2018",
          "xaxisname": "Month",
          "yaxisname": "Revenue",
          "showvalues": "1",
          "placeValuesInside": "1",
          "rotateValues": "1",
          "valueFontColor": "#ffffff",
          "numberprefix": "$",

          //Cosmetics
          "baseFontColor": "#333333",
          "baseFont": "Helvetica Neue,Arial",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "showborder": "0",
          "paletteColors": "#0075c2",
          "showalternatehgridcolor": "0",
          "showplotborder": "0",
          "labeldisplay": "WRAP",
          "divlinecolor": "#CCCCCC",
          "showcanvasborder": "0",
          "linethickness": "3",
          "plotfillalpha": "100",
          "plotgradientcolor": "",
          "numVisiblePlot": "12",
          "divlineAlpha": "100",
          "divlineColor": "#999999",
          "divlineThickness": "1",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1",
          "scrollheight": "10",
          "flatScrollBars": "1",
          "scrollShowButtons": "0",
          "scrollColor": "#cccccc",
          "showHoverEffect": "1",
        },
        "categories": [
          {
            "category": [
              { "label": "Jan 2017" },
              { "label": "Feb 2017" },
              { "label": "Mar 2017" },
              { "label": "Apr 2017" },
              { "label": "May 2017" },
              { "label": "Jun 2017" },
              { "label": "Jul 2017" },
              { "label": "Aug 2017" },
              { "label": "Sep 2017" },
              { "label": "Oct 2017" },
              { "label": "Nov 2017" },
              { "label": "Dec 2017" },
              { "label": "Jan 2018" },
              { "label": "Feb 2018" },
              { "label": "Mar 2018" },
              { "label": "Apr 2018" },
              { "label": "May 2018" },
              { "label": "Jun 2018" },
              { "label": "Jul 2018" },
              { "label": "Aug 2018" },
              { "label": "Sep 2018" },
              { "label": "Oct 2018" },
              { "label": "Nov 2018" },
              { "label": "Dec 2018" }
            ]
          }
        ],
        "dataset": [
          {
            "data": [
              { "value": "27400" },
              { "value": "29800" },
              { "value": "25800" },
              { "value": "26800" },
              { "value": "29600" },
              { "value": "32600" },
              { "value": "31800" },
              { "value": "36700" },
              { "value": "29700" },
              { "value": "31900" },
              { "value": "34800" },
              { "value": "24800" },
              { "value": "26300" },
              { "value": "31800" },
              { "value": "30900" },
              { "value": "33000" },
              { "value": "36200" },
              { "value": "32100" },
              { "value": "37500" },
              { "value": "38500" },
              { "value": "35400" },
              { "value": "38200" },
              { "value": "33300" },
              { "value": "38300" }
            ]
          }
        ]
      }
    },
    'pred_5': {
      type: 'stackedarea2d',
      renderAt: 'chart-container',
      width: '100%',
      height: '200px',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "yAxisName": "Amount",
          "numberPrefix": "$",
          "paletteColors": "#0075c2,#1aaf5d",
          "borderAlpha": "20",
          "showCanvasBorder": "0",
          "usePlotGradientColor": "0",
          "plotBorderAlpha": "10",
          "showLegend": "0",
          "legendBorderAlpha": "0",
          "legendShadow": "0",
          "showValues": "0",
          "showBorder": "0",
          "showXAxisLine": "1",
          "xAxisLineColor": "#999999",
          "divlineColor": "#999999",
          "divLineIsDashed": "1",
          "showAlternateHGridColor": "0",
          "subcaptionFontBold": "0",
          "subcaptionFontSize": "14"
        },
        "categories": [
          {
            "category": [
              { "label": "Jan 2017" },
              { "label": "Feb 2017" },
              { "label": "Mar 2017" },
              { "label": "Apr 2017" },
              { "label": "May 2017" },
              { "label": "Jun 2017" },
              { "label": "Jul 2017" },
              { "label": "Aug 2017" },
              { "label": "Sep 2017" },
              { "label": "Oct 2017" },
              { "label": "Nov 2017" },
              { "label": "Dec 2017" },
              { "label": "Jan 2018" },
              { "label": "Feb 2018" },
              { "label": "Mar 2018" },
              { "label": "Apr 2018" },
            ]
          }
        ],
        "dataset": [
          {
            "seriesname": "Food Products",
            "data": [
              {
                "value": "11000"
              },
              {
                "value": "15000"
              },
              {
                "value": "13500"
              },
              {
                "value": "15000"
              },
              {
                "value": "12500"
              },
              {
                "value": "17000"
              },
              {
                "value": "14300"
              },
              {
                "value": "11200"
              },
              {
                "value": "14000"
              },
              {
                "value": "17000"
              },
              {
                "value": "18000"
              },
              {
                "value": "16000"
              },
              {
                "value": "14300"
              },
              {
                "value": "16500"
              },
              {
                "value": "18900"
              },
              {
                "value": "13400"
              },
              {
                "value": "15400"
              },
              {
                "value": "16400"
              },
              {
                "value": "18000"
              },
              {
                "value": "13400"
              },
              {
                "value": "15600"
              },
            ]
          },
        ]
      }
    },
  };

  constructor() {
  }

  ngOnInit() {
    if (this.gid) {
      this.type = this.chartType[this.gid].type;
      this.dataSource = this.chartType[this.gid].dataSource;
      this.width = this.chartType[this.gid].width;
      this.height = this.chartType[this.gid].height;
    }
    if (this.priceList) {
      this.dataSource['dataset'] = this.priceList;
    }
    console.log('priceList on chart: ', this.priceList);
  }

  ngOnChanges(event) {
    console.log('chart onchange():', event);
    console.log('dataset: ', this.priceList);
    this.chartType[this.gid].dataSource.dataset = this.priceList;
  }
}
