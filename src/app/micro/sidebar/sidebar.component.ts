import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menus = ['Dashboard', 'Price Data', 'Analysis', 'Prediction', 'Simulation', 'Schedule', 'Reports'];
  constructor() { }

  ngOnInit() {
  }

}
