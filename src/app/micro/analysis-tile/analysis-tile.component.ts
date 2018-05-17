import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-analysis-tile',
  templateUrl: './analysis-tile.component.html',
  styleUrls: ['./analysis-tile.component.css']
})
export class AnalysisTileComponent implements OnInit {
  @Output() clicked = new EventEmitter<number>();
  cPage = 1;

  constructor() { }

  ngOnInit() {
  }

  onClick(id) {
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
  }

  viewPopup(id) {

  }
}
