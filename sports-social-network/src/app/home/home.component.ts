import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EventsService } from '../services/events.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events$: Observable<Event[]>;

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
  }
}
