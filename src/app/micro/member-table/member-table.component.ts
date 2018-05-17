import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css']
})
export class MemberTableComponent implements OnInit {
  @Input('type') type;
  @Input('inputData') inputData;

  @Output() 'change' = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  select(event) {
    // console.log(event.path[1].id);
    this.change.emit(event.path[1].id);
  }
}
