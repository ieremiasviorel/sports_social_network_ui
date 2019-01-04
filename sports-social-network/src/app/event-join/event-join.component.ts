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


@Component({
  selector: 'app-event-join',
  templateUrl: './event-join.component.html',
  styleUrls: ['./event-join.component.scss']
})
export class EventJoinComponent implements OnInit {

  events: Event[];
  sports = SPORTS;
  skill = SKILL;
  selectedEvent: null;

  prefSport: string;
  prefSkill: string;
  prefPrice: number = 0;
  prefParticipantsNr: number= 0;

  searched: string[] = [];

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
          this.events.splice(i, 1);
        }
      }
    }
  }

  selectEvent(event) {
    this.selectedEvent = event;
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
