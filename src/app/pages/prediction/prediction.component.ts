import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  title = 'Prediction';
  chartUrl = environment.kibana.graphs.prediction;

  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  clean(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
