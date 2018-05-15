import { Component, OnInit } from '@angular/core';
import * as priceList from '../../../assets/data/sample2.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  priceList = priceList;

  chartData = {
    'pred_1': 'BAA',
    'pred_2': 'BAA',
  };

  constructor() { }

  ngOnInit() {
  }

}
