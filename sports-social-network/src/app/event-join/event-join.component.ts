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
  prefPrice: string;
  prefParticipantsNr: string;

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
    console.log(this.events);
    console.log(this.prefSport);
    if (this.prefSport) {
      this.events = this.events.filter(ev => ev.category === this.prefSport);
    }
    console.log(this.events);
    /*  if ( !(this.prefSport === '')) {
       this.events.filter(event => event.category.toLowerCase() === this.prefSport.toLowerCase());
     }
     if ( !(this.prefSkill === '')) {
       this.events.filter(event => event.skill.toLowerCase() === this.prefSkill.toLowerCase());
     }
     if ( !(prefPrice === 0)) {
       console.log('3lung' + this.events.length);
       for (let i = 0; i < this.events.length; i++) {
         console.log(this.events[i].name + 'muee' + i);
         if (!(this.events[i].price < prefPrice)) {
           this.events.splice(i, 1);
         }
       }
     }
     if ( !(prefPart === 0)) {
       console.log('4lung' + this.events.length);
       for (let i = 0; i < this.events.length; i++) {
         console.log(this.events[i].name + 'muee' + i);
         if (!(this.events[i].participants < prefPart)) {
           this.events.splice(i, 1);
         }
       }
     } */
  }

  selectedSkill(value: any) {
    this.prefSkill = value;
  }

  selectedSport(value: any) {
    this.prefSport = value;
  }
}
