import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menus = ['Dashboard', 'Homepage', 'Analysis', 'Prediction', 'Simulation', 'Schedule', 'Reports'];
  current = 'Prediction';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goto(location) {
    this.router.navigate([location.toLowerCase()]);
    this.current = location;
  }

}
