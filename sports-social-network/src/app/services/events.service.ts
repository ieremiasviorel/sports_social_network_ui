import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../models/event';
import 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: Observable<Event[]>;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllEvents(): Observable<Event[]> {
    const fileUrl = '../../assets/demo-data/events.json';
    return this.httpClient.get<Event[]>(fileUrl);
  }

  getFilteredEvents(prefSport: any, prefSkill: any, prefPrice: any, prefPart: any) {

  }
}
