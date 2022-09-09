import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeRoute: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(route: string) {
    this.activeRoute = route;
    this.router.navigateByUrl(route);
  }
}
