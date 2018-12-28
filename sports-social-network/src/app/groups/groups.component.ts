import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { GroupsService } from '../services/groups.service';
import { Group } from '../models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  recommended$: Observable<Group[]>;
  yourGroups$: Observable<Group[]>;

  selectedGroup: null;

  constructor(private router: Router,  private groupsService: GroupsService) {
  }

  ngOnInit() {
    this.yourGroups$ = this.groupsService.getAllGroups();
  }

  selectGroup(group) {
    this.selectedGroup = group.name;
  }

  onJoinGroup(groupName) {

  }

  onCreateGroup() {
    this.router.navigateByUrl('/group-create');
  }





}
