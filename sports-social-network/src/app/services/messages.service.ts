import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUserMessages(): Observable<Message[]> {
    const fileUrl = '../../assets/demo-data/messages.json';
    return this.httpClient.get<Message[]>(fileUrl);
  }
}
