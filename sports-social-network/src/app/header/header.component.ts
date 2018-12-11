import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  USER_MENUS: string[] = ['HOME', 'EVENTS', 'GROUPS', 'PROFILE'];

  selectedMenu: string = this.USER_MENUS[0];

  constructor() { }

  ngOnInit() {
  }

  selectMenu(selectedMenu: string): void {
    this.selectedMenu = selectedMenu;
  }
}
