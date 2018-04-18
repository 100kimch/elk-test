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


@NgModule({
  declarations: [
    AppComponent,
    PredictionComponent,
    HeaderComponent,
    SidebarComponent,
    MainTileComponent,
    GroupComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
