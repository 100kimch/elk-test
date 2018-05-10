import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-tile',
  templateUrl: './main-tile.component.html',
  styleUrls: ['./main-tile.component.css']
})
export class MainTileComponent implements OnInit {
  @Output() clicked = new EventEmitter<number>();
  cPage = 1;

  constructor(
    private _elementRef: ElementRef
  ) { }

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
