import { Component, OnInit, Inject } from '@angular/core';
import { SPORTS, TYPE } from '../constants';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Group } from '../models/group';
import { GroupsService } from '../services/groups.service';
import { GroupsComponent } from '../groups/groups.component';

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.scss']
})
export class CreateGroupDialogComponent implements OnInit {

  name: string;
  members: number;
  description: string;
  selectedSport: string;
  selectedPrivacy: string;
  type = TYPE;
  sports = SPORTS;
  constructor(private dialogRef: MatDialogRef<CreateGroupDialogComponent>, private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('/groups');
    this.dialogRef.close();
  }
  createGroup() {
    const createdGroup: Group = new Group();
    createdGroup.name = this.name;
    createdGroup.category = this.selectedSport;
    createdGroup.type = this.selectedPrivacy;
    createdGroup.numberMembers = this.members;
    createdGroup.description = this.description;
    createdGroup.logo = "http://allgbp.com/wp-content/uploads/2016/09/rugby2-640x364.jpg";
    this.dialogRef.close({createdGroup: createdGroup});
  }
}
