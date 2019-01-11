import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GroupsService } from '../services/groups.service';
import { Group } from '../models/group';
import { SPORTS, TYPE } from '../constants';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {

  imageUrl = '/assets/images/default-image.png';
  fileToUpload: File = null;
  yourGroups$: Observable<Group[]>;
  type = TYPE;
  sports = SPORTS;

  onCreate(groupName, groupDescription, groupSport, groupType, groupMaxMembers) {
    const groupToCreate: Group = new Group();
    groupToCreate.name = groupName.value;
    groupToCreate.description = groupDescription.value;
    groupToCreate.category = groupSport.value;
    groupToCreate.type = groupType.value;
    groupToCreate.numberMembers = groupMaxMembers.value;
    groupToCreate.logo = '../../assets/images/' + this.fileToUpload.name;
    this.groupsService.createGroup(groupToCreate);
    this.router.navigateByUrl('/groups');
  }

  onCancel() {
    console.log('Cancel clicked');
  }
  constructor(private router: Router, private groupsService: GroupsService) { }

  ngOnInit() {
    this.yourGroups$ = this.groupsService.getAllGroups();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
