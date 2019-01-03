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
  selectedGroupName: string = '';
  selectedGroupMembers: string = '';
  selectedGroupType: string = '';
  selectedGroupCategory: string = '';
  selectedGroupDescription: string = '';
  logo: string = '';
  selectedGroupLogo: string = '';

  constructor(private router: Router,  private groupsService: GroupsService) {
  }

  ngOnInit() {
    this.yourGroups$ = this.groupsService.getAllGroups();
  }

  selectGroup(group) {
    this.selectedGroup = group.name;
    this.selectedGroupName = 'Name: ' + group.name;
    this.selectedGroupMembers = 'Max number of members: ' + group.numberMembers;
    this.selectedGroupType = 'Type: ' + group.type;
    this.selectedGroupCategory = 'Category: ' + group.category;
    this.selectedGroupDescription = 'Description: ' + group.description;
    this.logo = 'Logo: ';
    this.selectedGroupLogo = group.logo;
  }

  onJoinGroup(groupName) {

  }

  onCreateGroup() {
    this.router.navigateByUrl('/group-create');
  }





}
