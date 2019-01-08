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
  selectedGroupName = '';
  selectedGroupMembers = '';
  selectedGroupType = '';
  selectedGroupCategory = '';
  selectedGroupDescription = '';
  selectedGroupLogo = '';

  constructor(private router: Router,  private groupsService: GroupsService) {
  }

  ngOnInit() {
    this.recommended$ = this.groupsService.getRecommendedGroups();
    this.yourGroups$ = this.groupsService.getYourGroups();
  }

  selectGroup(group) {
    this.selectedGroup = group.name;
    this.selectedGroupName = group.name;
    this.selectedGroupMembers = '' + group.numberMembers;
    this.selectedGroupType = '' + group.type;
    this.selectedGroupCategory = '' + group.category;
    this.selectedGroupDescription = '' + group.description;
    this.selectedGroupLogo = group.logo;
  }

  onJoinGroup(groupName) {

  }

  onCreateGroup() {
    this.router.navigateByUrl('/group-create');
  }





}
