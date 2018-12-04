import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  USER_MENUS: string[] = ['HOME', 'EVENTS', 'GROUPS', 'PROFILE'];

  constructor() { }

  ngOnInit() {
  }

}
