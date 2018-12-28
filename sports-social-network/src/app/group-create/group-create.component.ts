import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { GroupsService } from '../services/groups.service';
import { Group } from '../models/group';
import {HttpClient} from '@angular/common/http';

const TYPE = [
  'Public', 'Private'
];

const SPORTS = [
  'Fotbal', 'Baschet'
];


@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {

  yourGroups$: Observable<Group[]>;
  type = TYPE;
  sports = SPORTS;

  selectedImage = null;

  onCreate(groupName, groupDescription, groupSport, groupType, groupMaxMembers) {
    console.log('Create clicked');
    console.log(groupName.value);
    console.log(groupDescription.value);
    console.log(groupSport.value);
    console.log(groupType.value);
    console.log(groupMaxMembers.value);
  }

  onCancel() {
    console.log('Cancel clicked');
  }
  constructor(private groupsService: GroupsService, private http: HttpClient) { }

  ngOnInit() {
    this.yourGroups$ = this.groupsService.getAllGroups();
  }

  onImageSelected(event, logo) {
    this.selectedImage = event.target.files[0];
  }
}
