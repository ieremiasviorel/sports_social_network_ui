import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  USER_MENUS = [
    { name: 'HOME', url: '/' },
    { name: 'EVENTS', url: '/events' },
    { name: 'GROUPS', url: '/groups' },
    { name: 'PROFILE', url: '/profile' },
  ];

  selectedMenu: string;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(ev => ev instanceof NavigationStart))
      .subscribe((ev: NavigationStart) => {
        this.selectedMenu = this.USER_MENUS.find(menu => menu.url.indexOf(ev.url.split('/')[1]) > -1).name;
      });
  }

  ngOnInit() {
  }

  selectMenu(selectedMenu: string): void {
    this.selectedMenu = selectedMenu;
    this.router.navigate([this.USER_MENUS.find(menu => menu.name === selectedMenu).url]);
  }
}
