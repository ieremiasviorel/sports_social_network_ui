import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Group} from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllGroups(): Observable<Group[]> {
    const fileUrl = '../../assets/demo-data/groups.json';
    return this.httpClient.get<Group[]>(fileUrl);
  }

  public getYourGroups(): Observable<Group[]> {
    const fileUrl = '../../assets/demo-data/groups.json';
    return this.httpClient.get<Group[]>(fileUrl);
  }

  public getRecommendedGroups(): Observable<Group[]> {
    const fileUrl = '../../assets/demo-data/recGroups.json';
    return this.httpClient.get<Group[]>(fileUrl);
  }
}
