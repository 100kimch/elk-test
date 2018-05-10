import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { PredictionComponent } from '../pages/prediction/prediction.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const routes: Routes = [
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
        component: PredictionComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
