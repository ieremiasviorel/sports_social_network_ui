import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Group } from '../models/group';
import { Event } from '../models/event';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  newGroups: Array<Group>;

  constructor(
    private httpClient: HttpClient
  ) {
    this.newGroups = new Array<Group>();
  }

  public createGroup(group: Group): void {
    this.newGroups.push(group);
  }

  public getAllGroups(): Observable<Group[]> {
    const fileUrl = '../../assets/demo-data/groups.json';
    return this.httpClient.get<Group[]>(fileUrl);
  }

  public getYourGroups(): Observable<Group[]> {
    const fileUrl = '../../assets/demo-data/groups.json';
    return this.httpClient.get<Group[]>(fileUrl)
      .pipe(
        map((groups: Group[]) => { this.newGroups.forEach(g => groups.push(g)); console.log(groups); return groups; })
      );
  }

  public getRecommendedGroups(): Observable<Group[]> {
    const fileUrl = '../../assets/demo-data/recGroups.json';
    return this.httpClient.get<Group[]>(fileUrl);
  }
}
