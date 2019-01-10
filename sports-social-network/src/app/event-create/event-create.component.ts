import { Component, OnInit } from '@angular/core';
import {EventsService} from '../services/events.service';
import { SPORTS, SKILL_LEVELS, TYPE} from '../constants';
import {Router} from '@angular/router';
import { Event } from '../models/event';
import {isNumber} from 'util';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  model: any = {};
  sports = SPORTS;
  skill = SKILL_LEVELS;
  type = TYPE;

  latitude: 46.7712;
  longitude: 23.6236;

  onCreate(eventName, eventNrPart, eventPrice, eventAddress, eventAdditionalInfo, eventSport, eventSkill, eventType) {
    // if (!isNumber(eventPrice.value)) {
    //   alert('The price must be a number');
    // }
    //
    // if (!isNumber(eventNrPart.value)) {
    //   alert('The number of participants must be a number');
    // }
    const createdEvent: Event = new Event();
    createdEvent.name = eventName.value;
    createdEvent.category = eventSport.value;
    createdEvent.skill = eventSkill.value;
    createdEvent.participants = eventNrPart.value;
    createdEvent.price = eventPrice.value;
    createdEvent.description = eventAdditionalInfo.value;
    createdEvent.type = eventType.value;

    this.eventsService.joinEvent(createdEvent);
    this.router.navigateByUrl('/events/user');
  }

  onCancel() {
    this.router.navigateByUrl('/events/join');
  }

  constructor(private router: Router,
    private eventsService: EventsService) { }

  ngOnInit() {
  }

}
