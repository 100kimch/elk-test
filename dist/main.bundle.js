webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-sidebar {\n  float: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_prediction_prediction_component__ = __webpack_require__("../../../../../src/app/pages/prediction/prediction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__micro_header_header_component__ = __webpack_require__("../../../../../src/app/micro/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__micro_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/micro/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__micro_main_tile_main_tile_component__ = __webpack_require__("../../../../../src/app/micro/main-tile/main-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__micro_group_group_component__ = __webpack_require__("../../../../../src/app/micro/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__micro_table_table_component__ = __webpack_require__("../../../../../src/app/micro/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__micro_fusion_chart_fusion_chart_component__ = __webpack_require__("../../../../../src/app/micro/fusion-chart/fusion-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_fusioncharts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_fusioncharts_fusioncharts_charts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_fusioncharts_fusioncharts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_fusioncharts_themes_fusioncharts_theme_fint__ = __webpack_require__("../../../../fusioncharts/themes/fusioncharts.theme.fint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_fusioncharts_themes_fusioncharts_theme_fint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_fusioncharts_themes_fusioncharts_theme_fint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular4_fusioncharts__ = __webpack_require__("../../../../angular4-fusioncharts/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__micro_popup_popup_component__ = __webpack_require__("../../../../../src/app/micro/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__micro_high_chart_high_chart_component__ = __webpack_require__("../../../../../src/app/micro/high-chart/high-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__charts_dash1_dash1_component__ = __webpack_require__("../../../../../src/app/charts/dash1/dash1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__charts_dash2_dash2_component__ = __webpack_require__("../../../../../src/app/charts/dash2/dash2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__charts_dash3_dash3_component__ = __webpack_require__("../../../../../src/app/charts/dash3/dash3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__charts_dash4_dash4_component__ = __webpack_require__("../../../../../src/app/charts/dash4/dash4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__charts_dash5_dash5_component__ = __webpack_require__("../../../../../src/app/charts/dash5/dash5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__charts_dash6_dash6_component__ = __webpack_require__("../../../../../src/app/charts/dash6/dash6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__charts_dash7_dash7_component__ = __webpack_require__("../../../../../src/app/charts/dash7/dash7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__charts_pred1_pred1_component__ = __webpack_require__("../../../../../src/app/charts/pred1/pred1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__charts_pred2_pred2_component__ = __webpack_require__("../../../../../src/app/charts/pred2/pred2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__charts_pred3_pred3_component__ = __webpack_require__("../../../../../src/app/charts/pred3/pred3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__charts_pred4_pred4_component__ = __webpack_require__("../../../../../src/app/charts/pred4/pred4.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pages_prediction_prediction_component__["a" /* PredictionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__micro_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__micro_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__micro_main_tile_main_tile_component__["a" /* MainTileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__micro_group_group_component__["a" /* GroupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__micro_table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_10__micro_fusion_chart_fusion_chart_component__["a" /* FusionChartComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__micro_popup_popup_component__["a" /* PopupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__micro_high_chart_high_chart_component__["a" /* HighChartComponent */],
                __WEBPACK_IMPORTED_MODULE_19__charts_dash1_dash1_component__["a" /* Dash1Component */],
                __WEBPACK_IMPORTED_MODULE_20__charts_dash2_dash2_component__["a" /* Dash2Component */],
                __WEBPACK_IMPORTED_MODULE_21__charts_dash3_dash3_component__["a" /* Dash3Component */],
                __WEBPACK_IMPORTED_MODULE_22__charts_dash4_dash4_component__["a" /* Dash4Component */],
                __WEBPACK_IMPORTED_MODULE_23__charts_dash5_dash5_component__["a" /* Dash5Component */],
                __WEBPACK_IMPORTED_MODULE_24__charts_dash6_dash6_component__["a" /* Dash6Component */],
                __WEBPACK_IMPORTED_MODULE_25__charts_dash7_dash7_component__["a" /* Dash7Component */],
                __WEBPACK_IMPORTED_MODULE_26__charts_pred1_pred1_component__["a" /* Pred1Component */],
                __WEBPACK_IMPORTED_MODULE_27__charts_pred2_pred2_component__["a" /* Pred2Component */],
                __WEBPACK_IMPORTED_MODULE_28__charts_pred3_pred3_component__["a" /* Pred3Component */],
                __WEBPACK_IMPORTED_MODULE_29__charts_pred4_pred4_component__["a" /* Pred4Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular4_fusioncharts__["a" /* FusionChartsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11_fusioncharts__, __WEBPACK_IMPORTED_MODULE_12_fusioncharts_fusioncharts_charts__, __WEBPACK_IMPORTED_MODULE_13_fusioncharts_themes_fusioncharts_theme_fint__),
                __WEBPACK_IMPORTED_MODULE_17_angular2_highcharts__["ChartModule"].forRoot('highcharts')
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/charts/dash1/dash1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/dash1/dash1.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chart1Container\"></div>"

/***/ }),

/***/ "../../../../../src/app/charts/dash1/dash1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dash1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dash1Component = /** @class */ (function () {
    function Dash1Component() {
    }
    Dash1Component.prototype.ngAfterViewInit = function () {
        var Highcharts = window['Highcharts'];
        Highcharts.chart('chart1Container', {
            chart: {
                type: 'variablepie',
                backgroundColor: 'transparent'
            },
            colors: ['#CB6161', '#ED8383'],
            title: {
                text: '<p>2 Quantity</p>',
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
                            'name': 'Avg. Rooms',
                            'y': 13
                        }]
                },
                {
                    minPointSize: 10,
                    innerSize: '60%',
                    zMin: 0,
                    name: 'Amount',
                    data: [{
                            'name': 'Quantity',
                            'y': 2
                        }]
                }]
        });
    };
    Dash1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash1',
            template: __webpack_require__("../../../../../src/app/charts/dash1/dash1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/dash1/dash1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dash1Component);
    return Dash1Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/dash2/dash2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/dash2/dash2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chart2Container\"></div>"

/***/ }),

/***/ "../../../../../src/app/charts/dash2/dash2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dash2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dash2Component = /** @class */ (function () {
    function Dash2Component() {
    }
    Dash2Component.prototype.ngAfterViewInit = function () {
        var Highcharts = window['Highcharts'];
        Highcharts.chart('chart2Container', {
            chart: {
                type: 'variablepie',
                backgroundColor: 'transparent'
            },
            colors: ['#6F61CB', '#A196EB'],
            title: {
                text: 'Total: 149',
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
                            'y': 121
                        }, {
                            'name': 'Block Sales',
                            'y': 28
                        }]
                }]
        });
    };
    Dash2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash2',
            template: __webpack_require__("../../../../../src/app/charts/dash2/dash2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/dash2/dash2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dash2Component);
    return Dash2Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/dash3/dash3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/dash3/dash3.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chart3Container\"></div>"

/***/ }),

/***/ "../../../../../src/app/charts/dash3/dash3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dash3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dash3Component = /** @class */ (function () {
    function Dash3Component() {
    }
    Dash3Component.prototype.ngAfterViewInit = function () {
        var Highcharts = window['Highcharts'];
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
    };
    Dash3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash3',
            template: __webpack_require__("../../../../../src/app/charts/dash3/dash3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/dash3/dash3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dash3Component);
    return Dash3Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/dash4/dash4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/dash4/dash4.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chart4Container\"></div>"

/***/ }),

/***/ "../../../../../src/app/charts/dash4/dash4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dash4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dash4Component = /** @class */ (function () {
    function Dash4Component() {
    }
    Dash4Component.prototype.ngAfterViewInit = function () {
        var Highcharts = window['Highcharts'];
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
                            'y': 507
                        }, {
                            'name': 'Avg.Low',
                            'y': 405
                        }]
                }]
        });
    };
    Dash4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash4',
            template: __webpack_require__("../../../../../src/app/charts/dash4/dash4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/dash4/dash4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dash4Component);
    return Dash4Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/dash5/dash5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/dash5/dash5.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chart5Container\"></div>"

/***/ }),

/***/ "../../../../../src/app/charts/dash5/dash5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dash5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dash5Component = /** @class */ (function () {
    function Dash5Component() {
    }
    Dash5Component.prototype.ngAfterViewInit = function () {
        var Highcharts = window['Highcharts'];
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
    };
    Dash5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash5',
            template: __webpack_require__("../../../../../src/app/charts/dash5/dash5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/dash5/dash5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dash5Component);
    return Dash5Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/dash6/dash6.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/dash6/dash6.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chart6Container\"></div>"

/***/ }),

/***/ "../../../../../src/app/charts/dash6/dash6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dash6Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dash6Component = /** @class */ (function () {
    function Dash6Component() {
    }
    Dash6Component.prototype.ngAfterViewInit = function () {
        var Highcharts = window['Highcharts'];
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
    };
    Dash6Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash6',
            template: __webpack_require__("../../../../../src/app/charts/dash6/dash6.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/dash6/dash6.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dash6Component);
    return Dash6Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/dash7/dash7.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/dash7/dash7.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chart7Container\"></div>"

/***/ }),

/***/ "../../../../../src/app/charts/dash7/dash7.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dash7Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_dash6_json__ = __webpack_require__("../../../../../src/assets/data/dash6.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_dash6_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_data_dash6_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Dash7Component = /** @class */ (function () {
    function Dash7Component() {
    }
    Dash7Component.prototype.ngAfterViewInit = function () {
        var data = __WEBPACK_IMPORTED_MODULE_1__assets_data_dash6_json__;
        var Highcharts = window['Highcharts'];
        // Create the chart
        Highcharts['stockChart']('chart7Container', {
            chart: {
                backgroundColor: 'transparent',
                spacingLeft: 20,
                spacingRight: 40,
                type: 'line'
            },
            plotOptions: {
                lineWidth: 5
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
                        value: 1513036800000,
                        color: '#CB6161',
                        dashStyle: 'shortdash',
                        width: 2,
                        label: {
                            text: 'Today'
                        }
                    }]
            },
            series: data
        });
    };
    Dash7Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash7',
            template: __webpack_require__("../../../../../src/app/charts/dash7/dash7.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/dash7/dash7.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dash7Component);
    return Dash7Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/pred1/pred1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/pred1/pred1.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chart8Container\" #chart></div>"

/***/ }),

/***/ "../../../../../src/app/charts/pred1/pred1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pred1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_pred1_json__ = __webpack_require__("../../../../../src/assets/data/pred1.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_pred1_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_data_pred1_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Pred1Component = /** @class */ (function () {
    function Pred1Component() {
    }
    Pred1Component.prototype.ngAfterViewInit = function () {
        var data = __WEBPACK_IMPORTED_MODULE_1__assets_data_pred1_json__[this.roomType];
        var Highcharts = window['Highcharts'];
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
            label: {},
            series: data
        });
    };
    Pred1Component.prototype.ngOnChanges = function (event) {
        var roomType = event.roomType.currentValue;
        console.log('changed: ', __WEBPACK_IMPORTED_MODULE_1__assets_data_pred1_json__[roomType][0]['data']);
        if (this.chart) {
            this.chart.series.forEach(function (element, index, arr) {
                console.log(arr);
                try {
                    arr[index].setData(__WEBPACK_IMPORTED_MODULE_1__assets_data_pred1_json__[roomType][index]['data']);
                }
                catch (e) {
                }
            });
            this.chart.redraw();
        }
        // this.sChart.nativeElement.highCharts().series[0].set( _data[event.currentValue], false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('roomType'),
        __metadata("design:type", Object)
    ], Pred1Component.prototype, "roomType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chart'),
        __metadata("design:type", Object)
    ], Pred1Component.prototype, "sChart", void 0);
    Pred1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pred1',
            template: __webpack_require__("../../../../../src/app/charts/pred1/pred1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/pred1/pred1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Pred1Component);
    return Pred1Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/pred2/pred2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/pred2/pred2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chart9Container\" #chart></div>"

/***/ }),

/***/ "../../../../../src/app/charts/pred2/pred2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pred2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_pred2_json__ = __webpack_require__("../../../../../src/assets/data/pred2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_pred2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_data_pred2_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Pred2Component = /** @class */ (function () {
    function Pred2Component() {
    }
    Pred2Component.prototype.ngAfterViewInit = function () {
        var data = __WEBPACK_IMPORTED_MODULE_1__assets_data_pred2_json__[this.roomType];
        var Highcharts = window['Highcharts'];
        // Create the chart
        this.chart = new Highcharts.stockChart('chart9Container', {
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
                        value: 1514036800000,
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
            series: data
        });
    };
    Pred2Component.prototype.ngOnChanges = function (event) {
        var roomType = event.roomType.currentValue;
        console.log('changed: ', __WEBPACK_IMPORTED_MODULE_1__assets_data_pred2_json__[roomType][0]['data']);
        if (this.chart) {
            this.chart.series.forEach(function (element, index, arr) {
                console.log(arr);
                try {
                    arr[index].setData(__WEBPACK_IMPORTED_MODULE_1__assets_data_pred2_json__[roomType][index]['data']);
                }
                catch (e) {
                }
            });
            this.chart.redraw();
        }
        // this.sChart.nativeElement.highCharts().series[0].set( _data[event.currentValue], false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('roomType'),
        __metadata("design:type", Object)
    ], Pred2Component.prototype, "roomType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chart'),
        __metadata("design:type", Object)
    ], Pred2Component.prototype, "sChart", void 0);
    Pred2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pred2',
            template: __webpack_require__("../../../../../src/app/charts/pred2/pred2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/pred2/pred2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Pred2Component);
    return Pred2Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/pred3/pred3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/pred3/pred3.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pred3 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/charts/pred3/pred3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pred3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Pred3Component = /** @class */ (function () {
    function Pred3Component() {
    }
    Pred3Component.prototype.ngOnInit = function () {
    };
    Pred3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pred3',
            template: __webpack_require__("../../../../../src/app/charts/pred3/pred3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/pred3/pred3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Pred3Component);
    return Pred3Component;
}());



/***/ }),

/***/ "../../../../../src/app/charts/pred4/pred4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/pred4/pred4.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pred4 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/charts/pred4/pred4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pred4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Pred4Component = /** @class */ (function () {
    function Pred4Component() {
    }
    Pred4Component.prototype.ngOnInit = function () {
    };
    Pred4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pred4',
            template: __webpack_require__("../../../../../src/app/charts/pred4/pred4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/pred4/pred4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Pred4Component);
    return Pred4Component;
}());



/***/ }),

/***/ "../../../../../src/app/micro/fusion-chart/fusion-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fusioncharts {\n  height: 30em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micro/fusion-chart/fusion-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<fusioncharts [width]=\"width\" [height]=\"height\" [type]=\"type\" [dataFormat]=\"dataFormat\" [dataSource]=\"dataSource\">\n</fusioncharts>"

/***/ }),

/***/ "../../../../../src/app/micro/fusion-chart/fusion-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusionChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FusionChartComponent = /** @class */ (function () {
    function FusionChartComponent() {
        this.dataFormat = 'json';
        this.chartType = {
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
                        {}
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
    }
    FusionChartComponent.prototype.ngOnInit = function () {
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
    };
    FusionChartComponent.prototype.ngOnChanges = function (event) {
        console.log('chart onchange():', event);
        console.log('dataset: ', this.priceList);
        this.chartType[this.gid].dataSource.dataset = this.priceList;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('gid'),
        __metadata("design:type", Object)
    ], FusionChartComponent.prototype, "gid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('priceList'),
        __metadata("design:type", Object)
    ], FusionChartComponent.prototype, "priceList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartDataType'),
        __metadata("design:type", Object)
    ], FusionChartComponent.prototype, "chartDataType", void 0);
    FusionChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fusion-chart',
            template: __webpack_require__("../../../../../src/app/micro/fusion-chart/fusion-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/micro/fusion-chart/fusion-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FusionChartComponent);
    return FusionChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/micro/group/group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-bottom: 0.25em;\n}\n\n.f2 {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n\narticle {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-height: 20em;\n  background: #eee;\n  border: 1px solid #666;\n}\n\nh1 {\n  background: #666;\n  margin: 0;\n  padding: 0.5em 1em;\n  color: white;\n}\n\n:host /deep/ .subbar {\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:host /deep/ .subbar div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 0.5em 0;\n}\n\n:host /deep/ .subbar strong {\n  font-size: 1.5em;\n}\n\n:host /deep/ .subbar p {\n  margin: 0;\n}\n\n.colored h1:after {\n  display: inline-block;\n  position: relative;\n  float: right;\n  width: 1em;\n  height: 1em;\n  content: '';\n  background-image: url('/assets/img/icon_chart.png');\n  background-size: 1em 1em;\n}\n\n.colored.c1 h1,\n.colored.c1 /deep/ .subbar {\n  background: #CB6161;\n  border-top: 1px solid #E37E7E;\n}\n\n.colored.c1,\n.colored.c1 * {\n  border-color: #D53636;\n}\n\n.colored.c2 h1,\n.colored.c2 /deep/ .subbar {\n  background: #6F61CB;\n  border-top: 1px solid #977EE3;\n}\n\n.colored.c2,\n.colored.c2 * {\n  border-color: #5C36D5;\n}\n\n.colored.c3 h1,\n.colored.c3 /deep/ .subbar {\n  background: #738A97;\n  border-top: 1px solid #9AACBD;\n}\n\n.colored.c3,\n.colored.c3 * {\n  border-color: #92AABA;\n}\n\n.colored.c4 h1,\n.colored.c4 /deep/ .subbar {\n  background: #CB9761;\n  border-top: 1px solid #E3B27E;\n}\n\n.colored.c4,\n.colored.c4 * {\n  border-color: #D58636;\n}\n\n.colored.c5 h1,\n.colored.c5 /deep/ .subbar {\n  background: #62B88E;\n  border-top: 1px solid #6CD3A4;\n\n\n}\n\n.colored.c5,\n.colored.c5 * {\n  border-color: #36D57F;\n}\n\n:host /deep/ iframe {\n  width: 100%;\n  min-width: 300px;\n  height: 32em;\n  border: none;\n}\n\n:host /deep/ input[type=\"date\"] {\n  position: relative;\n  margin-top: -34px;\n  margin-right: 5px;\n  padding: 0 0.5em;\n  height: 24px;\n  float: right;\n  border-radius: 10px; \n  border: none;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micro/group/group.component.html":
/***/ (function(module, exports) {

module.exports = "<article [ngClass]=\"gid\">\n  <h1>{{ title }}</h1>\n  <ng-content></ng-content>\n</article>\n"

/***/ }),

/***/ "../../../../../src/app/micro/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupComponent = /** @class */ (function () {
    function GroupComponent() {
    }
    GroupComponent.prototype.ngOnInit = function () {
        console.log(this.gid);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", Object)
    ], GroupComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('gid'),
        __metadata("design:type", Object)
    ], GroupComponent.prototype, "gid", void 0);
    GroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group',
            template: __webpack_require__("../../../../../src/app/micro/group/group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/micro/group/group.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/micro/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micro/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/micro/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/micro/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/micro/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/micro/high-chart/high-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micro/high-chart/high-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chartContainer\">\n  chart target\n</div>"

/***/ }),

/***/ "../../../../../src/app/micro/high-chart/high-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_sample2_json__ = __webpack_require__("../../../../../src/assets/data/sample2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_sample2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_data_sample2_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighChartComponent = /** @class */ (function () {
    function HighChartComponent() {
        this.seriesOptions = __WEBPACK_IMPORTED_MODULE_1__assets_data_sample2_json__["Standard"];
        this.seriesCounter = 0;
        this.names = ['MSFT', 'AAPL', 'GOOG'];
    }
    HighChartComponent.prototype.ngOnInit = function () {
    };
    HighChartComponent.prototype.ngAfterViewInit = function () {
        this.createChart();
    };
    HighChartComponent.prototype.createChart = function () {
        window['Highcharts'].stockChart('chartContainer', {
            chart: {
                backgroundColor: '#eee'
            },
            rangeSelector: {
                selected: 4
            },
            yAxis: {
                labels: {
                    formatter: function () {
                        return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    }
                },
                plotLines: [{
                        value: 0,
                        width: 2,
                        color: 'silver'
                    }]
            },
            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2,
                split: true
            },
            series: this.seriesOptions
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chartTarget'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HighChartComponent.prototype, "chartTarget", void 0);
    HighChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-high-chart',
            template: __webpack_require__("../../../../../src/app/micro/high-chart/high-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/micro/high-chart/high-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HighChartComponent);
    return HighChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/micro/main-tile/main-tile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n:host>li {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: white;\n  list-style: none;\n  padding: 0.5em 1em 0.5em 0.5em;\n  margin: 0.25em 0;\n}\n\n:host>li + li {\n  margin-left: 0.25em;\n}\n\n:host>li img {\n  float: left;\n  margin: 0.75em 0.5em;\n  height: 72px;\n}\n\n#t1 {\n  background: #388BB8;  \n}\n\n#t1:hover {\n  background: #5AADDA;\n}\n\n#t2 {\n  background: #38B86B;\n}\n\n#t2:hover {\n  background: #5ADA8D;\n}\n\n#t3 {\n  background: #724FB2;\n}\n\n#t3:hover {\n  background: #946BD4;\n}\n\n#t4 {\n  background: #B88F38;\n}\n\n#t4:hover {\n  background: #DAAF5A;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.5em 0 0.1em 0;\n  text-align: right;\n}\n\nh2 {\n  font-size: 1em;\n  margin: 0.1em;\n  text-align: right;\n}\n\nh3 {\n  display: block;\n  font-weight: 300;\n  line-height: 130%;\n  margin: 0;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 0.5em;\n  margin: 1em -1em -0.5em -0.5em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micro/main-tile/main-tile.component.html":
/***/ (function(module, exports) {

module.exports = "<li id=\"t1\" (click)=\"onClick('1')\">\n  <img src=\"/assets/img/icon_online_sales.png\">\n  <h1>+26%</h1>\n  <h2>Sales Average</h2>\n  <h3>Competition</h3>\n</li>\n<li id=\"t2\" (click)=\"onClick('2')\">\n  <img src=\"/assets/img/icon_visits.png\">\n  <h1>+12%</h1>\n  <h2>Price Average</h2>\n  <h3>Forecast</h3>\n</li>\n<li id=\"t3\" (click)=\"onClick('3')\">\n  <img src=\"/assets/img/icon_conversion_avg.png\">\n  <h1>+2.6%</h1>\n  <h2>Current Avg.</h2>\n  <h3>Revenue</h3>\n</li>\n<li id=\"t4\" (click)=\"onClick('4')\">\n  <img src=\"/assets/img/icon_trip_advisor.png\">\n  <h1>+2.7ew</h1>\n  <h2>Event Weight</h2>\n  <h3>Calculator</h3>\n</li>"

/***/ }),

/***/ "../../../../../src/app/micro/main-tile/main-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainTileComponent = /** @class */ (function () {
    function MainTileComponent(_elementRef) {
        this._elementRef = _elementRef;
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cPage = 1;
    }
    MainTileComponent.prototype.ngOnInit = function () {
    };
    MainTileComponent.prototype.onClick = function (id) {
        this.clicked.emit(id);
        switch (id) {
            case 1:
                this.cPage = 1;
                break;
            case 2:
                this.cPage = 2;
                break;
            case 3:
                this.cPage = 3;
                break;
            case 4:
                this.cPage = 4;
                break;
        }
    };
    MainTileComponent.prototype.viewPopup = function (id) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MainTileComponent.prototype, "clicked", void 0);
    MainTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-tile',
            template: __webpack_require__("../../../../../src/app/micro/main-tile/main-tile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/micro/main-tile/main-tile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], MainTileComponent);
    return MainTileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/micro/popup/popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  visibility: hidden;\n}\n\n:host.show {\n  visibility: visible;\n}\n\n#popupBox {\n  position: fixed;\n  margin: auto;\n  padding: 2em;\n  width: 50vw;\n  max-height: 80vh;\n  top: 10vh;\n  left: 25vw;\n  background: #fff;\n  z-index: 11;\n  text-align: left;\n  overflow-y: scroll;\n  -webkit-box-shadow: 0 30px 50px #333;\n          box-shadow: 0 30px 50px #333;\n}\n\n:host.show #popupBox:before {\n  content: '\\B2EB\\AE30';\n  position: fixed;\n  top: calc(10vh - 50px);\n  left: 75vw;\n  font-size: 14px;\n  line-height: 500%;\n  width: 90px;\n  height: 90px;\n  color: white;\n  /* background: rgba(255, 255, 255, 0.3); */\n  border-radius: 50%;\n  cursor: default;\n  z-index: 20;\n  pointer-events: none;\n  text-align: center;\n}\n\n#dim {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  overflow-y: scroll;\n  -webkit-backdrop-filter: blur(5px);\n}\n\n:host.show #dim {\n  opacity: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micro/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popupBox\">\n  <ng-content></ng-content>\n</div>\n<div id=\"dim\" (click)=\"hidePopup();\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/micro/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupComponent = /** @class */ (function () {
    function PopupComponent(_elementRef) {
        this._elementRef = _elementRef;
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent.prototype.showPopup = function () {
        this._elementRef.nativeElement.classList.add('show');
    };
    PopupComponent.prototype.hidePopup = function () {
        this._elementRef.nativeElement.classList.remove('show');
    };
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__("../../../../../src/app/micro/popup/popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/micro/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/micro/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes intro {\n  to {\n    opacity: 1;\n    /* margin: 0; */\n  }\n}\n@keyframes intro {\n  to {\n    opacity: 1;\n    /* margin: 0; */\n  }\n}\n:host {\n  display: block;\n  width: 250px;\n  height: 100vh;\n  margin: 0;\n  padding: 3em 2em;\n  background: url('/assets/img/bg_fabric_black.png');\n  color: white;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-shadow: inset 0 0 3em black;\n          box-shadow: inset 0 0 3em black;\n  -webkit-animation: intro 1s;\n          animation: intro 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  /* margin: 0 -250px; */\n  -webkit-transition: opacity 1s, margin 1s;\n  transition: opacity 1s, margin 1s;\n}\n#logo {\n  margin: 0 -2em -90px -2em;\n}\nh1 {\n  text-align: right;\n  margin-bottom: 2em;\n}\nli {\n  list-style: none;\n  text-align: right;\n  font-size: 1.2em;\n  color: #ddd;\n  padding: 1.5em 0.5em 0.5em 0;\n  margin-left: -2em;\n  margin-right: -0.5em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micro/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/img/logo_bed.png\" id=\"logo\">\n<h1>Prediction</h1>\n<li *ngFor=\"let title of menus\" [routerLink]=\"'/'+title.toLowerCase()\">{{ title }}</li>"

/***/ }),

/***/ "../../../../../src/app/micro/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.menus = ['Dashboard', 'Homepage', 'Analysis', 'Prediction', 'Simulation', 'Schedule', 'Reports'];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/micro/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/micro/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/micro/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: 400px;\n  overflow-y: scroll;\n}\n\n#container {\n  display: table;\n  width: 100%;\n  background: none;\n  font-size: 1em;\n  text-align: center;\n  padding: 0;\n  border-collapse: collapse;\n  /* word-wrap: break-word; */\n  /* border-spacing set instead of margin */\n  /* border-spacing: 10px; */\n  /* border-collapse: separat e; */\n}\n\n#hider {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 2em;\n  margin-top: -2em;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 1)));\n  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));\n}\n\nheader {\n  display: table-row;\n  font-size: 1em;\n  line-height: 300%;\n  font-weight: normal;\n  background: #888;\n  color: white;\n}\n\nheader .cell {\n  display: table-cell;\n  padding: 0em 0.3em;\n}\n\n.row {\n  display: table-row;\n}\n\n.row:nth-child(2n) {\n  background: #dfdfdf;\n}\n\n.party .row:nth-child(2n) {\n  background: initial;\n}\n\n.row:hover, .party .row:hover {\n  background: #bbb;\n  color: white;\n}\n\n.currency {\n  text-align: right;\n}\n\n.cell {\n  display: table-cell;\n  padding: 0.5em 0.3em;\n}\n\n.columnGroup {\n  display: table-column-group;\n}\n\n.column {\n  display: table-column;\n  color: red;\n}\n\n.red {\n  color: red;\n}\n\n.endline {\n  border-top: 1px solid #999;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micro/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" [ngClass]=\"{'party': type==='platformList'}\">\n  <header>\n    <!-- <span class=\"cell\" *ngFor=\"let category of categories[type]\" [innerHTML]=\"category\"></span> -->\n    <span class=\"cell\" *ngIf=\"type==='priceList'\">Location</span>\n    <span class=\"cell\" *ngIf=\"type==='platformList'\">Platform</span>\n    <span class=\"cell\">Room</span>\n    <span class=\"cell\">Price</span>\n  </header>\n  <div class=\"column red\"></div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"row\" *ngFor=\"let record of records[0]\" [ngClass]=\"{'endline': record['isEnd']}\" [id]=\"record['roomtype']\" (click)=\"onClick($event)\">\n    <span class=\"cell\" *ngIf=\"type==='priceList'\">{{ record['name'] }}</span>\n    <span class=\"cell\" *ngIf=\"type==='platformList'\">{{ record['platform'] }}</span>\n    <!-- <span class=\"cell\" *ngIf=\"type==='platformList'\">{{ record['platform'] }}</span> -->\n    <span class=\"cell\">{{ record['roomname'] }}</span>\n    <span class=\"cell currency\">{{ toCurrencyFormat(record['value']) }}</span>\n  </div>\n</div>\n\n<!-- <div id=\"hider\"></div> -->"

/***/ }),

/***/ "../../../../../src/app/micro/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.chartDataType = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.records = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        if (this.type === 'priceList') {
            this.records.push(this.editDataPrice(this.priceList));
        }
        if (this.type === 'platformList') {
            this.records.push(this.editDataPlatform(this.priceList));
            // this.selected = this.priceList[this.type];
        }
        console.log('records:', this.records);
    };
    TableComponent.prototype.editDataPrice = function (priceList) {
        var dataList = [];
        var index = '';
        // tslint:disable-next-line:forin
        for (var category in priceList) {
            // tslint:disable-next-line:forin
            for (var record in priceList[category]) {
                var selected = priceList[category][record];
                var _object = {
                    'name': '',
                    'roomname': '',
                    'value': '',
                    'isEnd': false
                };
                if (selected['name'] !== index) {
                    index = selected['name'];
                    _object['name'] = selected['name'];
                    _object['isEnd'] = true;
                }
                else {
                    selected['name'] = '';
                }
                _object['roomname'] = selected['roomname'];
                _object['value'] = selected['data'][6];
                _object['roomtype'] = category;
                dataList.push(_object);
            }
        }
        return dataList;
    };
    TableComponent.prototype.editDataPlatform = function (priceList) {
        var dataList = [];
        var index = '';
        console.log('platformList: ', priceList);
        // tslint:disable-next-line:forin
        for (var category in priceList) {
            // tslint:disable-next-line:forin
            for (var record in priceList[category]) {
                var selected = priceList[category][record];
                var _object = {
                    'platform': '',
                    'roomname': '',
                    'value': '',
                    'isEnd': false
                };
                if (selected['platform'] !== index) {
                    index = selected['platform'];
                    _object['platform'] = selected['platform'];
                    _object['isEnd'] = true;
                }
                else {
                    selected['platform'] = '';
                }
                _object['roomname'] = selected['roomname'];
                _object['value'] = selected['value'];
                _object['roomtype'] = category;
                dataList.push(_object);
            }
        }
        // let _object = { 'platform': '', 'isEnd': false };
        // let index = '';
        // // tslint:disable-next-line:forin
        // for (const object in priceList) {
        //   if (priceList[object]['platform'] !== index) {
        //     index = priceList[object]['platform'];
        //     _object['isEnd'] = true;
        //   } else {
        //     priceList[object]['platform'] = '';
        //   }
        //   _object = priceList[object];
        // }
        return dataList;
    };
    TableComponent.prototype.onClick = function (event) {
        this.chartDataType.emit(event.path[1].id);
    };
    TableComponent.prototype.toCurrencyFormat = function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('priceList'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "priceList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "chartDataType", void 0);
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/micro/table/table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/micro/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: auto;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  display: block;\n}\n\n.f2 {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n\n.f3 {\n  -webkit-box-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"path\">\n  Dashboard > Summary\n</div>\n\n<section>\n  <h1>Status</h1>\n  <div class=\"row\">\n    <app-group [gid]=\"'colored c1'\" [title]=\"'Hotels'\">\n      <div class=\"subbar\">\n        <div>\n          <strong>2</strong>\n          <p>Quantity</p>\n        </div>\n        <div>\n          <strong>14</strong>\n          <p>Avg. Rooms.</p>\n        </div>\n      </div>\n      <app-dash1></app-dash1>\n      <!-- <app-fusion-chart [gid]=\"'dash_1'\"></app-fusion-chart> -->\n    </app-group>\n    <app-group [gid]=\"'colored c2'\" [title]=\"'Reserved'\">\n      <div class=\"subbar\">\n        <div>\n          <strong>121</strong>\n          <p>Quantity</p>\n        </div>\n        <div>\n          <strong>28</strong>\n          <p>Block Sales</p>\n        </div>\n      </div>\n      <app-dash2></app-dash2>\n      <!-- <app-fusion-chart [gid]=\"'dash_2'\"></app-fusion-chart> -->\n    </app-group>\n    <app-group [gid]=\"'colored c3'\" [title]=\"'Data Collection'\">\n      <div class=\"subbar\">\n        <div>\n          <strong>7201</strong>\n          <p>Quantity</p>\n        </div>\n        <div>\n          <strong>37000</strong>\n          <p>Price Qty</p>\n        </div>\n      </div>\n      <app-dash3></app-dash3>\n      <!-- <app-fusion-chart [gid]=\"'dash_3'\"></app-fusion-chart> -->\n    </app-group>\n    <app-group [gid]=\"'colored c4'\" [title]=\"'Competitiveness'\">\n      <div class=\"subbar\">\n        <div>\n          <strong>5\n            07</strong>\n          <p>Avg. High</p>\n        </div>\n        <div>\n          <strong>405</strong>\n          <p>Avg. Low</p>\n        </div>\n      </div>\n      <app-dash4></app-dash4>\n      <!-- <app-fusion-chart [gid]=\"'dash_4'\"></app-fusion-chart> -->\n    </app-group>\n    <app-group [gid]=\"'colored c5'\" [title]=\"'Billing'\">\n      <div class=\"subbar\">\n        <div>\n          <strong>0</strong>\n          <p>Own Cost</p>\n        </div>\n        <div>\n          <strong>444.67</strong>\n          <p>Avg. Cos\n            t</p>\n        </div>\n      </div>\n      <app-dash5></app-dash5>\n      <!-- <app-fusion-chart [gid]=\"'dash_5'\"></app-fusion-chart> -->\n    </app-group>\n  </div>\n  <div class=\"row\">\n    <app-group [title]=\"'Actual Status'\" class=\"f3\">\n      <app-dash6></app-dash6>\n      <!-- <app-fusion-chart [gid]=\"'dash_6'\"></app-fusion-chart> -->\n    </app-group>\n    <app-group [title]=\"'Prediction'\" class=\"f2\">\n      <!-- <app-fusion-chart [gid]=\"'pred_2'\" [priceList]=\"priceList['BS']['Standard']\"></app-fusion-chart> -->\n      <app-pred2 [roomType]=\"chartData['pred_2']\"></app-pred2>\n    </app-group>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_sample_json__ = __webpack_require__("../../../../../src/assets/data/sample.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_sample_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_data_sample_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.priceList = __WEBPACK_IMPORTED_MODULE_1__assets_data_sample_json__;
        this.chartData = {
            'pred_1': 'Standard',
            'pred_2': 'Standard',
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/prediction/prediction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: auto;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  display: block;\n}\n\n.f2 {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n\n.crossBox {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  display: block;\n  margin-left: 4px;\n}\n\n.crossBox app-group {\n  display: block;\n  height: 255px;\n  overflow: hidden;\n  margin: 0;\n}\n\n.crossBox app-group + app-group {\n  margin-top: 4px;\n}\n\n#p1 /deep/ #popupBox {\n  background: #999;\n  color: #fff;\n}\n\n#p1 /deep/ #popupBox #lists {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#p1 img{\n  display: inline-block;\n  width: 140px;\n  height: 70px;\n  margin: 1em;\n  -o-object-fit: contain;\n     object-fit: contain;\n  background: #fff;\n  border-radius: 2em 0 2em 0;\n}\n\n#recommendBox li {\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#recommendBox img {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n#recommendBox h1 {\n  font-size: 48px;\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/prediction/prediction.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"path\">\n  Simulation > Prediction\n</div>\n\n<section>\n  <h1>Overview</h1>\n  <app-main-tile (clicked)=\"onClick($event)\"></app-main-tile>\n  <div class=\"row\" *ngIf=\"cPage==1\">\n    <app-group [title]=\"'Price Comparison'\" class=\"f2\">\n      <app-pred1 [roomType]=\"chartData['pred_1']\"></app-pred1>\n      <!-- <app-high-chart></app-high-chart> -->\n      <!-- <app-fusion-chart [gid]=\"'pred_1'\" [priceList]=\"chartData['pred_1']\"></app-fusion-chart> -->\n    </app-group>\n    <!-- <iframe [src]=\"clean(chartUrl)\"></iframe> -->\n    <app-group [title]=\"'Current Price'\">\n      <app-table [type]=\"'priceList'\" [priceList]=\"priceList\" (chartDataType)=\"setDataset($event)\"></app-table>\n    </app-group>\n    <app-group [title]=\"'Platforms'\">\n      <app-table [type]=\"'platformList'\" [priceList]=\"partyList\"></app-table>\n    </app-group>\n  </div>\n\n  <div class=\"row\" *ngIf=\"cPage==2\">\n    <app-group [title]=\"'Prediction'\" class=\"f2\">\n      <app-pred2 [roomType]=\"chartData['pred_2']\"></app-pred2>\n      <!-- <app-fusion-chart [gid]=\"'pred_2'\" [priceList]=\"chartData['pred_2']\"></app-fusion-chart> -->\n    </app-group>\n    <!-- <iframe [src]=\"clean(chartUrl)\"></iframe> -->\n    <app-group [title]=\"'Forecast Price'\">\n      <app-table [type]=\"'priceList'\" [priceList]=\"priceList\" (chartDataType)=\"setDataset($event)\"></app-table>\n    </app-group>\n    <app-group [title]=\"'Recommend'\">\n      <input type=\"date\">\n      <div id=\"recommendBox\">\n        <li>\n          <img src=\"/assets/img/logo_hc.jpeg\">\n          <h1>123,000</h1>\n        </li>\n      </div>\n    </app-group>\n  </div>\n\n  <div class=\"row\" *ngIf=\"cPage==3\">\n    <app-group [title]=\"'Revenue'\" class=\"f2\">\n      <app-fusion-chart [gid]=\"'pred_1'\"></app-fusion-chart>\n    </app-group>\n    <div class=\"crossBox\">\n      <app-group [title]=\"'Property'\">\n        <app-fusion-chart [gid]=\"'pred_4'\"></app-fusion-chart>\n      </app-group>\n      <app-group [title]=\"'Profit'\">\n        <app-fusion-chart [gid]=\"'pred_5'\"></app-fusion-chart>\n      </app-group>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"cPage==4\">\n    <app-group [title]=\"'Weight per Week'\" class=\"f2\">\n      <app-pred1></app-pred1>\n      <!-- <app-fusion-chart [gid]=\"'pred_1'\"></app-fusion-chart> -->\n    </app-group>\n    <div class=\"crossBox\">\n      <app-group [title]=\"'Event Frequency'\">\n        <app-fusion-chart [gid]=\"'pred_4'\"></app-fusion-chart>\n      </app-group>\n      <app-group [title]=\"'Flight Frequency'\">\n        <app-fusion-chart [gid]=\"'pred_5'\"></app-fusion-chart>\n      </app-group>\n    </div>\n  </div>\n</section>\n\n<app-popup id=\"p1\">\n  <h2>Select 3rd Party Platforms</h2>\n  <div id=\"lists\">\n    <img src=\"/assets/img/logo_ab.png\" alt=\"\">\n    <img src=\"/assets/img/logo_hj.png\" alt=\"\">\n    <img src=\"/assets/img/logo_ho.png\" alt=\"\">\n    <img src=\"/assets/img/logo_hc.jpeg\" alt=\"\">\n    <img src=\"/assets/img/logo_ex.jpg\" alt=\"\">\n  </div>\n</app-popup>\n"

/***/ }),

/***/ "../../../../../src/app/pages/prediction/prediction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_sample2_json__ = __webpack_require__("../../../../../src/assets/data/sample2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_sample2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_data_sample2_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_data_sample3_json__ = __webpack_require__("../../../../../src/assets/data/sample3.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_data_sample3_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_data_sample3_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PredictionComponent = /** @class */ (function () {
    function PredictionComponent(sanitizer, _elementRef) {
        this.sanitizer = sanitizer;
        this._elementRef = _elementRef;
        this.title = 'Prediction';
        this.chartUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].kibana.graphs.prediction;
        this.cPage = 1;
        this.priceList = __WEBPACK_IMPORTED_MODULE_3__assets_data_sample2_json__;
        this.partyList = __WEBPACK_IMPORTED_MODULE_4__assets_data_sample3_json__;
        this.chartData = {
            'pred_1': 'Standard',
            'pred_2': 'Standard',
        };
    }
    PredictionComponent.prototype.ngOnInit = function () {
        // console.log('priceList', priceList);
    };
    PredictionComponent.prototype.onClick = function (clicked) {
        this.cPage = clicked;
        if (clicked == 1) {
            this._elementRef.nativeElement.querySelector('app-popup#p1').classList.add('show');
        }
    };
    PredictionComponent.prototype.setDataset = function (changes) {
        console.log('event: ', changes);
        this.chartData['pred_1'] = changes;
    };
    PredictionComponent.prototype.clean = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    PredictionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prediction',
            template: __webpack_require__("../../../../../src/app/pages/prediction/prediction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/prediction/prediction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], PredictionComponent);
    return PredictionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_prediction_prediction_component__ = __webpack_require__("../../../../../src/app/pages/prediction/prediction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'prediction',
                pathMatch: 'full'
            },
            {
                path: 'prediction',
                component: __WEBPACK_IMPORTED_MODULE_2__pages_prediction_prediction_component__["a" /* PredictionComponent */],
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            }
        ],
    },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/assets/data/dash6.json":
/***/ (function(module, exports) {

module.exports = [{"name":"Black Sands Hotel","data":[[1512086400000,52455],[1512345600000,55455],[1512432000000,53000],[1512518400000,50420],[1512604800000,56909],[1512691200000,56909],[1512950400000,56909],[1513036800000,52455]],"tooltip":{"valueDecimals":4}},{"name":"Hotel Regent Marin the Blue","data":[[1512086400000,148224],[1512345600000,71302],[1512432000000,76167],[1512518400000,78973],[1512604800000,88325],[1512691200000,88262],[1512950400000,76167],[1513036800000,76167]],"tooltip":{"valueDecimals":4}},{"name":"Mejong Glad Jeju","data":[[1512086400000,101783],[1512345600000,101783],[1512432000000,107438],[1512518400000,101783],[1512604800000,108525],[1512691200000,128099],[1512950400000,101783],[1513036800000,108525]],"tooltip":{"valueDecimals":4}}]

/***/ }),

/***/ "../../../../../src/assets/data/pred1.json":
/***/ (function(module, exports) {

module.exports = {"Standard":[{"name":"Black Sands Hotel","data":[[1512086400000,32455],[1512345600000,75455],[1512432000000,63000],[1512518400000,70420],[1512604800000,56909],[1512691200000,36909],[1512950400000,56909],[1513036800000,72455],[1514036800000,62455],[1515036800000,42455],[1516036800000,62455],[1517036800000,82455],[1518036800000,92455],[1519036800000,42455],[1520036800000,52455],[1521036800000,62455],[1522036800000,82455],[1523036800000,32455]],"tooltip":{"valueDecimals":4}},{"name":"Hotel Regent Marin the Blue","data":[[1512086400000,148224],[1512345600000,71302],[1512432000000,76167],[1512518400000,78973],[1512604800000,88325],[1512691200000,88262],[1512950400000,76167],[1513036800000,52455],[1514036800000,82455],[1515036800000,36455],[1516036800000,72455],[1517036800000,62455],[1518036800000,42455],[1519036800000,22455],[1520036800000,34567],[1521036800000,52455],[1522036800000,34567],[1523036800000,32455]],"tooltip":{"valueDecimals":4}},{"name":"Mejong Glad Jeju","data":[[1512086400000,101783],[1512345600000,101783],[1512432000000,107438],[1512518400000,101783],[1512604800000,108525],[1512691200000,128099],[1512950400000,101783],[1513036800000,112121],[1514036800000,131231],[1515036800000,78921],[1516036800000,112131],[1517036800000,63242],[1518036800000,132221],[1519036800000,151212],[1520036800000,72323],[1521036800000,82321],[1522036800000,102222],[1523036800000,51232]],"tooltip":{"valueDecimals":4}}],"Deluxe":[{"name":"Black Sands Hotel","data":[[1512086400000,43223],[1512345600000,64532],[1512432000000,42345],[1512518400000,24522],[1512604800000,24456],[1512691200000,77543],[1512950400000,93453],[1513036800000,53243],[1514036800000,73432],[1515036800000,34245],[1516036800000,32343],[1517036800000,76323],[1518036800000,43554],[1519036800000,98343],[1520036800000,75334],[1521036800000,32425],[1522036800000,64536],[1523036800000,84343]],"tooltip":{"valueDecimals":4}},{"name":"Hotel Regent Marin the Blue","data":[[1512086400000,132423],[1512345600000,152443],[1512432000000,231423],[1512518400000,145323],[1512604800000,153623],[1512691200000,163453],[1512950400000,112342],[1513036800000,93234],[1514036800000,142342],[1515036800000,62343],[1516036800000,83252],[1517036800000,112232],[1518036800000,142425],[1519036800000,32425],[1520036800000,63456],[1521036800000,83253],[1522036800000,102232],[1523036800000,112232]],"tooltip":{"valueDecimals":4}},{"name":"Mejong Glad Jeju","data":[[1512086400000,113242],[1512345600000,122324],[1512432000000,162342],[1512518400000,182352],[1512604800000,153432],[1512691200000,173342],[1512950400000,143534],[1513036800000,93243],[1514036800000,73434],[1515036800000,112234],[1516036800000,82342],[1517036800000,62343],[1518036800000,113423],[1519036800000,173422],[1520036800000,152322],[1521036800000,82343],[1522036800000,52353],[1523036800000,142343]],"tooltip":{"valueDecimals":4}}],"Sweet":[{"name":"Black Sands Hotel","data":[[1512086400000,52455],[1512345600000,55455],[1512432000000,53000],[1512518400000,50420],[1512604800000,56909],[1512691200000,56909],[1512950400000,56909],[1513036800000,72455],[1514036800000,62455],[1515036800000,42455],[1516036800000,62455],[1517036800000,82455],[1518036800000,92455],[1519036800000,42455],[1520036800000,52455],[1521036800000,62455],[1522036800000,82455],[1523036800000,32455]],"tooltip":{"valueDecimals":4}},{"name":"Hotel Regent Marin the Blue","data":[[1512086400000,148224],[1512345600000,71302],[1512432000000,76167],[1512518400000,78973],[1512604800000,88325],[1512691200000,88262],[1512950400000,76167],[1513036800000,72455],[1514036800000,62455],[1515036800000,42455],[1516036800000,62455],[1517036800000,82455],[1518036800000,92455],[1519036800000,42455],[1520036800000,52455],[1521036800000,62455],[1522036800000,82455],[1523036800000,32455]],"tooltip":{"valueDecimals":4}},{"name":"Mejong Glad Jeju","data":[[1512086400000,101783],[1512345600000,101783],[1512432000000,107438],[1512518400000,101783],[1512604800000,108525],[1512691200000,128099],[1512950400000,101783],[1513036800000,72455],[1514036800000,62455],[1515036800000,42455],[1516036800000,62455],[1517036800000,82455],[1518036800000,92455],[1519036800000,42455],[1520036800000,52455],[1521036800000,62455],[1522036800000,82455],[1523036800000,32455]],"tooltip":{"valueDecimals":4}}]}

/***/ }),

/***/ "../../../../../src/assets/data/pred2.json":
/***/ (function(module, exports) {

module.exports = {"Standard":[{"name":"Black Sands Hotel","data":[[1512086400000,32455],[1512345600000,75455],[1512432000000,63000],[1512518400000,70420],[1512604800000,56909],[1512691200000,36909],[1512950400000,56909],[1513036800000,72455],[1514036800000,62455],[1515036800000,42455],[1516036800000,62455],[1517036800000,82455],[1518036800000,92455],[1519036800000,42455],[1520036800000,52455]],"tooltip":{"valueDecimals":4}},{"name":"Hotel Regent Marin the Blue","data":[[1512086400000,148224],[1512345600000,71302],[1512432000000,76167],[1512518400000,78973],[1512604800000,88325],[1512691200000,88262],[1512950400000,76167],[1513036800000,52455],[1514036800000,82455],[1515036800000,36455],[1516036800000,72455],[1517036800000,62455],[1518036800000,42455],[1519036800000,22455],[1520036800000,34567]],"tooltip":{"valueDecimals":4}},{"name":"Mejong Glad Jeju","data":[[1512086400000,101783],[1512345600000,101783],[1512432000000,107438],[1512518400000,101783],[1512604800000,108525],[1512691200000,128099],[1512950400000,101783],[1513036800000,112121],[1514036800000,131231],[1515036800000,78921],[1516036800000,112131],[1517036800000,63242],[1518036800000,132221],[1519036800000,151212],[1520036800000,72323]],"tooltip":{"valueDecimals":4}}],"Deluxe":[{"name":"Black Sands Hotel","data":[[1512086400000,43223],[1512345600000,64532],[1512432000000,42345],[1512518400000,24522],[1512604800000,24456],[1512691200000,77543],[1512950400000,93453],[1513036800000,53243],[1514036800000,73432],[1515036800000,34245],[1516036800000,32343],[1517036800000,76323],[1518036800000,43554],[1519036800000,98343],[1520036800000,75334]],"tooltip":{"valueDecimals":4}},{"name":"Hotel Regent Marin the Blue","data":[[1512086400000,132423],[1512345600000,152443],[1512432000000,231423],[1512518400000,145323],[1512604800000,153623],[1512691200000,163453],[1512950400000,112342],[1513036800000,93234],[1514036800000,142342],[1515036800000,62343],[1516036800000,83252],[1517036800000,112232],[1518036800000,142425],[1519036800000,32425],[1520036800000,63456]],"tooltip":{"valueDecimals":4}},{"name":"Mejong Glad Jeju","data":[[1512086400000,113242],[1512345600000,122324],[1512432000000,162342],[1512518400000,182352],[1512604800000,153432],[1512691200000,173342],[1512950400000,143534],[1513036800000,93243],[1514036800000,73434],[1515036800000,112234],[1516036800000,82342],[1517036800000,62343],[1518036800000,113423],[1519036800000,173422],[1520036800000,152322]],"tooltip":{"valueDecimals":4}}],"Sweet":[{"name":"Black Sands Hotel","data":[[1512086400000,52455],[1512345600000,55455],[1512432000000,53000],[1512518400000,50420],[1512604800000,56909],[1512691200000,56909],[1512950400000,56909],[1513036800000,72455],[1514036800000,62455],[1515036800000,42455],[1516036800000,62455],[1517036800000,82455],[1518036800000,92455],[1519036800000,42455],[1520036800000,52455]],"tooltip":{"valueDecimals":4}},{"name":"Hotel Regent Marin the Blue","data":[[1512086400000,148224],[1512345600000,71302],[1512432000000,76167],[1512518400000,78973],[1512604800000,88325],[1512691200000,88262],[1512950400000,76167],[1513036800000,72455],[1514036800000,62455],[1515036800000,42455],[1516036800000,62455],[1517036800000,82455],[1518036800000,92455],[1519036800000,42455],[1520036800000,52455]],"tooltip":{"valueDecimals":4}},{"name":"Mejong Glad Jeju","data":[[1512086400000,101783],[1512345600000,101783],[1512432000000,107438],[1512518400000,101783],[1512604800000,108525],[1512691200000,128099],[1512950400000,101783],[1513036800000,72455],[1514036800000,62455],[1515036800000,42455],[1516036800000,62455],[1517036800000,82455],[1518036800000,92455],[1519036800000,42455],[1520036800000,52455]],"tooltip":{"valueDecimals":4}}]}

/***/ }),

/***/ "../../../../../src/assets/data/sample.json":
/***/ (function(module, exports) {

module.exports = {"BS":{"Standard":[{"seriesname":"Black Sands Hotel","roomname":"Standard Twin","data":[{"value":"57909"},{"value":"56909"},{"value":"52455"},{"value":"52703"},{"value":"52455"},{"value":"56909"},{"value":"50010"},{"value":"52455"},{"value":"55455"},{"value":"53000"},{"value":"50420"},{"value":"56909"},{"value":"56909"},{"value":"56909"},{"value":"52455"}]},{"seriesname":"호텔 리젠트 마린 더 블루","roomname":"Standard Twin","data":[{"value":"88772"},{"value":"88262"},{"value":"88321"},{"value":"76913"},{"value":"76913"},{"value":"78913"},{"value":"128224"},{"value":"148224"},{"value":"71302"},{"value":"76167"},{"value":"78973"},{"value":"88325"},{"value":"88262"},{"value":"76167"},{"value":"76167"}]},{"seriesname":"메종 글래드 제주","roomname":"Standard Twin","data":[{"value":"123132"},{"value":"123333"},{"value":"132111"},{"value":"101783"},{"value":"112211"},{"value":"102321"},{"value":"112211"},{"value":"101783"},{"value":"101783"},{"value":"107438"},{"value":"101783"},{"value":"108525"},{"value":"128099"},{"value":"101783"},{"value":"108525"}]}],"Deluxe":[{"seriesname":"Black Sands Hotel","roomname":"Deluxe Twin","data":[{"value":"52321"},{"value":"52066"},{"value":"54555"},{"value":"53243"},{"value":"63022"},{"value":"57654"},{"value":"52323"},{"value":"52066"},{"value":"59215"},{"value":"53230"},{"value":"59920"},{"value":"64483"},{"value":"58056"},{"value":"54597"}]},{"seriesname":"호텔 리젠트 마린 더 블루","roomname":"Deluxe Double","data":[{"value":"102222"},{"value":"102222"},{"value":"102222"},{"value":"107898"},{"value":"109653"},{"value":"112121"},{"value":"115200"},{"value":"115200"},{"value":"102090"},{"value":"102090"},{"value":"102090"},{"value":"109654"},{"value":"109653"},{"value":"102090"}]},{"seriesname":"메종 글래드 제주","roomname":"Deluxe Double","data":[{"value":"116864"},{"value":"116864"},{"value":"125422"},{"value":"135128"},{"value":"119503"},{"value":"122140"},{"value":"118342"},{"value":"118342"},{"value":"116864"},{"value":"116864"},{"value":"123996"},{"value":"136128"},{"value":"119503"},{"value":"122140"}]}],"Sweet":[{"seriesname":"Black Sands Hotel","roomname":"Junior Sweet","data":[{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"},{"value":"102092"}]},{"seriesname":"호텔 리젠트 마린 더 블루","roomname":"Hollywood Double","data":[{"value":"78132"},{"value":"76123"},{"value":"92312"},{"value":"93231"},{"value":"102322"},{"value":"77242"},{"value":"89512"},{"value":"89512"},{"value":"78972"},{"value":"76167"},{"value":"93577"},{"value":"93477"},{"value":"104769"},{"value":"78973"}]},{"seriesname":"메종 글래드 제주","roomname":"Premium Double","data":[{"value":"137017"},{"value":"138285"},{"value":"131800"},{"value":"134212"},{"value":"131942"},{"value":"132324"},{"value":"137017"},{"value":"137017"},{"value":"137017"},{"value":"131943"},{"value":"138285"},{"value":"131800"},{"value":"131943"},{"value":"131942"}]}]}}

/***/ }),

/***/ "../../../../../src/assets/data/sample2.json":
/***/ (function(module, exports) {

module.exports = {"Standard":[{"name":"Black Sands Hotel","roomname":"Standard","data":[57909,56909,52455,52703,52455,56909,50010,52455,55455,53000,50420,56909,56909,56909,52455]},{"name":"Hotel Regent Marin the Blue","roomname":"Standard","data":[88772,88262,88321,76913,76913,78913,128224,148224,71302,76167,78973,88325,88262,76167,76167]},{"name":"Mejong Glad Jeju","roomname":"Standard","data":[123132,123333,132111,101783,112211,102321,112211,101783,101783,107438,101783,108525,128099,101783,108525]}],"Deluxe":[{"name":"Black Sands Hotel","roomname":"Deluxe","data":[52321,52066,54555,53243,63022,57654,52323,52066,59215,53230,59920,64483,58056,54597]},{"name":"Hotel Regent Marin the Blue","roomname":"Deluxe","data":[102222,102222,102222,107898,109653,112121,115200,115200,102090,102090,102090,109654,109653,102090]},{"name":"Mejong Glad Jeju","roomname":"Deluxe","data":[116864,116864,125422,135128,119503,122140,118342,118342,116864,116864,123996,136128,119503,122140]}],"Sweet":[{"name":"Black Sands Hotel","roomname":"Sweet","data":[102092,102092,102092,102092,102092,102092,102092,102092,102092,102092,102092,102092,102092,102092]},{"name":"Hotel Regent Marin the Blue","roomname":"Hollywood","data":[78132,76123,92312,93231,102322,77242,89512,89512,78972,76167,93577,93477,104769,78973]},{"name":"Mejong Glad Jeju","roomname":"Premium","data":[137017,138285,131800,134212,131942,132324,137017,137017,137017,131943,138285,131800,131943,131942]}]}

/***/ }),

/***/ "../../../../../src/assets/data/sample3.json":
/***/ (function(module, exports) {

module.exports = {"Standard":[{"platform":"Hotels.com","roomname":"Standard","value":"22,000","isEnd":false},{"platform":"Hotels.com","roomname":"Deluxe","value":"11,700","isEnd":false},{"platform":"Hotels.com","roomname":"Sweet","value":"11,200","isEnd":false},{"platform":"Hotels Combine","roomname":"Standard","value":"22,500","isEnd":false},{"platform":"Hotels Combine","roomname":"Deluxe","value":"22,000","isEnd":false},{"platform":"Hotels Combine","roomname":"Sweet","value":"63,000","isEnd":false},{"platform":"Hotelnjoy","roomname":"Standard","value":"82,500","isEnd":false},{"platform":"Hotelnjoy","roomname":"Deluxe","value":"16,000","isEnd":false}],"Deluxe":[{"platform":"Expedia","roomname":"Standard","value":"22,000","isEnd":false},{"platform":"Expedia","roomname":"Deluxe","value":"11,700","isEnd":false},{"platform":"Hotels.com","roomname":"Sweet","value":"11,200","isEnd":false},{"platform":"Hotels Combine","roomname":"Standard","value":"22,500","isEnd":false},{"platform":"Hotels Combine","roomname":"Deluxe","value":"22,000","isEnd":false},{"platform":"Hotels Combine","roomname":"Sweet","value":"63,000","isEnd":false},{"platform":"Hotelnjoy","roomname":"Standard","value":"82,500","isEnd":false},{"platform":"Hotelnjoy","roomname":"Deluxe","value":"16,000","isEnd":false}],"Sweet":[{"platform":"Hotels.com","roomname":"Standard","value":"22,000","isEnd":false},{"platform":"Hotels.com","roomname":"Deluxe","value":"11,700","isEnd":false},{"platform":"Hotels.com","roomname":"Sweet","value":"11,200","isEnd":false},{"platform":"Hotels Combine","roomname":"Standard","value":"22,500","isEnd":false},{"platform":"Hotels Combine","roomname":"Deluxe","value":"22,000","isEnd":false},{"platform":"Hotels Combine","roomname":"Sweet","value":"63,000","isEnd":false},{"platform":"Hotelnjoy","roomname":"Standard","value":"82,500","isEnd":false},{"platform":"Hotelnjoy","roomname":"Deluxe","value":"16,000","isEnd":false}]}

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    kibana: {
        graphs: {
            prediction: 'http://ec2-13-209-26-201.ap-northeast-2.compute.amazonaws.com/app/kibana#/visualize/edit/1a067a20-42eb-11e8-bd14-7bd0e7247ef0?embed=true&_g=()'
        }
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map