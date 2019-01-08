import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { GroupsService } from '../services/groups.service';
import { Group } from '../models/group';
import {HttpClient} from '@angular/common/http';

const TYPE = [
  'Public', 'Private'
];

const SPORTS = [
  'Fotbal', 'Baschet', 'Rugby', 'Volei', 'Tenis'
];


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

  selectedImage = null;

  onCreate(groupName, groupDescription, groupSport, groupType, groupMaxMembers) {
    const groupToCreate: Group = new Group();
    groupToCreate.name = groupName.value;
    groupToCreate.description = groupDescription.value;
    groupToCreate.category = groupSport.value;
    groupToCreate.type = groupType.value;
    groupToCreate.numberMembers = groupMaxMembers.value;
    groupToCreate.logo = this.fileToUpload.name;
    // this.yourGroups$ = this.groupsService.createGroup(groupToCreate);
    console.log('Create clicked');
    console.log(this.yourGroups$);
  }

  onCancel() {
    console.log('Cancel clicked');
  }
  constructor(private groupsService: GroupsService, private http: HttpClient) { }

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
