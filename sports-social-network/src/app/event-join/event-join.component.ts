import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event';

const SPORTS = [
  '', 'FOTBAL', 'BASKET', 'BOWLING'
];

const SKILL = [
  '', 'Beginner', 'Intermediate', 'Advanced'
];

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

  menuOptions: string[] = EVENT_OPERATIONS.map(eventOperation => eventOperation.name);

  events$: Observable<Event[]>;
  events: Event[];
  sports = SPORTS;
  skill = SKILL;
  selectedEvent: null;

  prefSport: string;
  prefSkill: string;
  prefPrice = 0;
  prefParticipantsNr = 0;

  searched: string[] = [];
  selectedEventName: any;
  selectedEventSport: any;
  selectedEventSkill: any;
  selectedEventNrParticipants: any;
  selectedEventPrice: any;
  selectedEventDescription: any;

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.events = this.eventsService.getAllEvents().subscribe(events => {
      this.events = events as Event[];
    });

  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    return value;
  }

  onJoinEvent() {
    if (this.selectedEvent != null) {
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i] === this.selectedEvent) {
          this.eventsService.joinEvent(this.selectedEvent);
          this.events.splice(i, 1);
        }
      }
    }
  }

  selectEvent(event) {
    this.selectedEvent = event;
    this.selectedEventName = event.name;
    this.selectedEventSport = event.category;
    this.selectedEventSkill = event.skill;
    this.selectedEventNrParticipants = event.participants;
    this.selectedEventPrice = event.price;
    this.selectedEventDescription = event.description;
  }

  onEnter(event, search) {
    if (event.keyCode === 13) {
      this.searched.push(search.value);
      if (this.sports.indexOf(search.value) > 0) {
        this.events = this.events.filter(ev => ev.category === search.value);
      }
      search.value = '';
      console.log(search.value);
    }
  }

  filter() {
    for (let i = 0; i < this.events.length; i++) {
      for (let j = 0; j < this.searched.length; j++) {
        if (this.sports.indexOf(this.searched[j]) > 0) {
          this.events.splice(i, 1);
        }
      }
    }

  }

  deleteSearch(search) {
    for (let i = 0; i < this.searched.length; i++) {
      if (this.searched[i] === search) {
        this.searched.splice(i, 1);
        // @ts-ignore
        this.events = this.eventsService.getAllEvents().subscribe(events => {
          this.events = events as Event[];
        });
      }
    }
  }

  onApplyFilters() {
    if (this.prefSport) {
      this.events = this.events.filter(ev => ev.category === this.prefSport);
    }
    if (this.prefSkill) {
      this.events = this.events.filter(ev => ev.skill === this.prefSkill);
    }
    if (this.prefPrice !== 0) {
      this.events = this.events.filter(ev => ev.price < this.prefPrice);
    }
    if (this.prefParticipantsNr !== 0) {
      this.events = this.events.filter(ev => ev.participants < this.prefParticipantsNr);
    }
  }

  selectedSkill(value: any) {
    this.prefSkill = value;
  }

  selectedSport(value: any) {
    this.prefSport = value;
  }

  slidePrice(value: any) {
    this.prefPrice = value;
  }

  slideParticipants(value: number) {
    this.prefParticipantsNr = value;
  }
}
