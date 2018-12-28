import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event';

const SPORTS = [
  'Fotbal', 'Baschet'
];

const SKILL = [
  'Beginner', 'Intermediate', 'Advanced'
];


@Component({
  selector: 'app-event-join',
  templateUrl: './event-join.component.html',
  styleUrls: ['./event-join.component.scss']
})
export class EventJoinComponent implements OnInit {

  events$: Observable<Event[]>;
  sports = SPORTS;
  skill = SKILL;
  selectedEvent: null;
  searched: string[] = [];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    // @ts-ignore
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

  onApplyFilters() {

  }
}
