import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

import { EventsService } from '../services/events.service';
import { Event } from '../models/event';
import { MessagesService } from '../services/messages.service';
import { Message, Discussion, MessageType } from '../models/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events$: Observable<Event[]>;
  lastDiscussion$: Observable<Discussion>;
  chatOpen: boolean;
  messageText: string;

  constructor(
    private router: Router,
    private eventsService: EventsService,
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
    this.lastDiscussion$ = this.messagesService.getUserLastActiveDiscussion();
  }

  joinQuizz(){
    this.router.navigateByUrl('/join-quizz');
  }

  openChat(): void {
    this.chatOpen = true;
  }

  closeChat(): void {
    this.chatOpen = false;
  }

  sendMessage(): void {
    const messageToSend: Message = new Message();
    messageToSend.content = this.messageText;
    messageToSend.timestamp = Date.now().toString();
    messageToSend.type = MessageType.SENT;

    this.lastDiscussion$ = this.messagesService.sendMessage(messageToSend);
    this.messageText = '';
  }
}
