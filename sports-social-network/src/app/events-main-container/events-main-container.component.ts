import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const EVENT_OPERATIONS = [
  { name: 'Join Event', url: '/events/join' },
  { name: 'My Own Events', url: '/events/user' },
  { name: 'Create Event', url: '/events/create' },
  { name: 'Past Events', url: '/events/join' },
  { name: 'Send Invitations', url: '/events/join' },
  { name: 'Recent Events', url: '/events/join' },
  { name: 'Reminders', url: '/events/reminders' }
];

@Component({
  selector: 'app-events-main-container',
  templateUrl: './events-main-container.component.html',
  styleUrls: ['./events-main-container.component.scss']
})
export class EventsMainContainerComponent implements OnInit {

  EVENT_MENU_OPTIONS = EVENT_OPERATIONS.map(op => op.name);

  selectedMenuOption = this.EVENT_MENU_OPTIONS[0];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectedMenuChange(selectedMenuOption: string) {
    this.selectedMenuOption = selectedMenuOption;
    this.router.navigate([EVENT_OPERATIONS.find(op => op.name === this.selectedMenuOption).url]);
  }
}
