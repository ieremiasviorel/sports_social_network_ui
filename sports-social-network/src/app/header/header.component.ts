import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  USER_MENUS = [
    {name: 'HOME', url: '/'},
    {name: 'EVENTS', url: '/events'},
    {name: 'GROUPS', url: '/groups'},
    {name: 'PROFILE', url: '/profile'},
    ];

  selectedMenu: string = this.USER_MENUS[0].name;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectMenu(selectedMenu: string): void {
    this.selectedMenu = selectedMenu;
    for (let i = 0; i < this.USER_MENUS.length; i++) {
      if (selectedMenu === this.USER_MENUS[i].name) {
        this.router.navigateByUrl(this.USER_MENUS[i].url);
      }
    }
  }
}
