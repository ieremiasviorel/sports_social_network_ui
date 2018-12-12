import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllEvents(): Observable<Event[]> {
    const fileUrl = '../../assets/demo-data/events.json';
    return this.httpClient.get<Event[]>(fileUrl);
  }
}
