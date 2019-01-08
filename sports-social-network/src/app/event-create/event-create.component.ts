import { Component, OnInit } from '@angular/core';
import {EventsService} from '../services/events.service';
import { SPORTS, SKILL_LEVELS } from '../constants';
import {Router} from '@angular/router';
import { Event } from '../models/event';

const TYPE = [
  'Public', 'Private'
];

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  eventNamePlaceholer = 'Type name of the event';
  sports = SPORTS;
  skill = SKILL_LEVELS;
  type = TYPE;

  latitude: 46.7712;
  longitude: 23.6236;

  onCreate(eventName, eventNrPart, eventPrice, eventAddress, eventAdditionalInfo, eventSport, eventSkill, eventType) {
    const createdEvent: Event = new Event();
    createdEvent.name = eventName.value;
    createdEvent.category = eventSport.value;
    createdEvent.skill = eventSkill.value;
    createdEvent.participants = eventNrPart.value;
    createdEvent.price = eventPrice.value;
    createdEvent.description = eventAdditionalInfo.value;

    this.eventsService.joinEvent(createdEvent);
    this.router.navigateByUrl('/event-user');
  }

  onCancel() {
    console.log('Cancel clicked');
  }

  constructor(private router: Router,
    private eventsService: EventsService) { }

  ngOnInit() {
  }

}
