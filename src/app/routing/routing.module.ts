import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { PredictionComponent } from '../pages/prediction/prediction.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AnalysisComponent } from '../pages/analysis/analysis.component';
import { MicroSitesComponent } from '../pages/micro-sites/micro-sites.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'prediction',
    pathMatch: 'full'
  },
  {
    path: 'prediction',
    component: PredictionComponent,
  },
  {
    path: 'homepage',
    component: MicroSitesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'analysis',
    component: AnalysisComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
