import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EventsService } from '../services/events.service';
import { Event } from '../models/event';
import { SPORTS, SKILL_LEVELS } from '../constants';

const EVENT_OPERATIONS = [
  { name: 'Join Event', url: '/event-join' },
  { name: 'My Own Events', url: '/event-join' },
  { name: 'Create Event', url: '/event-create' },
  { name: 'Past Events', url: '/event-join' },
  { name: 'Send Invitation', url: '/event-join' },
  { name: 'Recent Events', url: '/event-join' }
];

@Component({
  selector: 'app-event-join',
  templateUrl: './event-join.component.html',
  styleUrls: ['./event-join.component.scss']
})
export class EventJoinComponent implements OnInit {

  SPORTS = SPORTS;
  SKILL_LEVELS = SKILL_LEVELS;

  menuOptions: string[] = EVENT_OPERATIONS.map(eventOperation => eventOperation.name);

  events$: Observable<Event[]>;
  selectedEvent: null;
  searched: string[] = [];

  constructor(
    private router: Router,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    return value;
  }

  onJoinEvent(event) {
    console.log(event.name);
  }

  selectEvent(event) {
    this.selectedEvent = event.name;
  }

  onEnter(event, search) {
    if (event.keyCode === 13) {
      this.searched.push(search.value);
      console.log(search.value);
    }
  }

  deleteSearch(search) {
    for (let i = 0; i < this.searched.length; i++) {
      if (this.searched[i] === search) {
        this.searched.splice(i, 1);
      }
    }
  }

  onApplyFilters(prefSport, prefSkill, prefPrice, prefPart) {
  }

  selectedMenuChanged(selectedMenuOption: string) {
    const urlToNavigate: string = EVENT_OPERATIONS.find(menuOption => menuOption.name === selectedMenuOption).url;
    this.router.navigate([urlToNavigate]);
  }
}
