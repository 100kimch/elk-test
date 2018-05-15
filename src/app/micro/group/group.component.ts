import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input('title') title;
  @Input('gid') gid;

  constructor() { }

  ngOnInit() {
    // console.log(this.gid);
  }

}
