import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../models/event';
import 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: Event[];

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllEvents(): Observable<Event[]> {
    const fileUrl = '../../assets/demo-data/events.json';
    return this.httpClient.get<Event[]>(fileUrl);
  }

  public joinEvent(e: Event): Event[] {
    const fileUrl = '../../assets/demo-data/events.json';
    // @ts-ignore
    this.events = this.httpClient.get<Event[]>(fileUrl).subscribe(events => {
      this.events = events as Event[];
    });
    this.events.push(e);
    return this.events;
  }

  public getUserEvents(): Observable<Event[]> {
    const fileUrl = '../../assets/demo-data/userEvents.json';
    return this.httpClient.get<Event[]>(fileUrl);
  }
}
