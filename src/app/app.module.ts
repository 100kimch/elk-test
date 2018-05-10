import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PredictionComponent } from './pages/prediction/prediction.component';
import { HeaderComponent } from './micro/header/header.component';
import { SidebarComponent } from './micro/sidebar/sidebar.component';
import { MainTileComponent } from './micro/main-tile/main-tile.component';
import { RoutingModule } from './routing/routing.module';
import { GroupComponent } from './micro/group/group.component';
import { TableComponent } from './micro/table/table.component';
import { FusionChartComponent } from './micro/fusion-chart/fusion-chart.component';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PopupComponent } from './micro/popup/popup.component';
import { ChartModule } from 'angular2-highcharts';
import { HighChartComponent } from './micro/high-chart/high-chart.component';
import { Dash1Component } from './charts/dash1/dash1.component';
import { Dash2Component } from './charts/dash2/dash2.component';
import { Dash3Component } from './charts/dash3/dash3.component';
import { Dash4Component } from './charts/dash4/dash4.component';
import { Dash5Component } from './charts/dash5/dash5.component';
import { Dash6Component } from './charts/dash6/dash6.component';
import { Dash7Component } from './charts/dash7/dash7.component';
import { Pred1Component } from './charts/pred1/pred1.component';
import { Pred2Component } from './charts/pred2/pred2.component';
import { Pred3Component } from './charts/pred3/pred3.component';
import { Pred4Component } from './charts/pred4/pred4.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PredictionComponent,
    HeaderComponent,
    SidebarComponent,
    MainTileComponent,
    GroupComponent,
    TableComponent,
    FusionChartComponent,
    DashboardComponent,
    PopupComponent,
    HighChartComponent,
    Dash1Component,
    Dash2Component,
    Dash3Component,
    Dash4Component,
    Dash5Component,
    Dash6Component,
    Dash7Component,
    Pred1Component,
    Pred2Component,
    Pred3Component,
    Pred4Component,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    ChartModule.forRoot('highcharts')
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
