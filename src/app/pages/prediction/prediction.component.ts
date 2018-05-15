import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

import * as priceList from '../../../assets/data/sample2.json';
import * as partyList from '../../../assets/data/sample3.json';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  title = 'Prediction';
  chartUrl = environment.kibana.graphs.prediction;
  cPage = 1;
  priceList = priceList;
  partyList = partyList;

  chartData = {
    'pred_1': 'BAA',
    'pred_2': 'BAA',
  };

  constructor(
    public sanitizer: DomSanitizer,
    private _elementRef: ElementRef,
  ) { }

  ngOnInit() {
    // console.log('priceList', priceList);
  }

  onClick(clicked: number) {
    this.cPage = clicked;
    if (clicked == 1) {
      // this._elementRef.nativeElement.querySelector('app-popup#p1').classList.add('show');
    }
  }

  setDataset1(changes) {
    console.log('event: ', changes);
    this.chartData['pred_1'] = changes;
  }

  setDataset2(changes) {
    console.log('event: ', changes);
    this.chartData['pred_2'] = changes;
  }

  clean(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
