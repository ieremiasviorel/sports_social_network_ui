import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EventsService } from '../services/events.service';
import { Event } from '../models/event';
import { MessagesService } from '../services/messages.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events$: Observable<Event[]>;
  messages$: Observable<Message[]>;
  chatOpen: boolean;

  constructor(
    private eventsService: EventsService,
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
    this.messages$ = this.messagesService.getUserMessages();
  }

  openChat(): void {
    this.chatOpen = true;
  }

  closeChat(): void {
    this.chatOpen = false;
  }
}
