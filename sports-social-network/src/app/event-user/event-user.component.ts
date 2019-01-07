import { Component, OnInit } from '@angular/core';
import {EventsService} from '../services/events.service';
import {Event} from "../models/event";

@Component({
  selector: 'app-event-user',
  templateUrl: './event-user.component.html',
  styleUrls: ['./event-user.component.scss']
})
export class EventUserComponent implements OnInit {

  events: Event[];
  selectedEvent: Event;
  selectedEventName: any;
  selectedEventSport: any;
  selectedEventSkill: any;
  selectedEventNrParticipants: any;
  selectedEventPrice: any;
  selectedEventDescription: any;

  constructor(private eventsService: EventsService) {

  }

  ngOnInit() {
    // @ts-ignore
    this.events = this.eventsService.getUserEvents().subscribe(events => {
      this.events = events as Event[];
    });
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
}
