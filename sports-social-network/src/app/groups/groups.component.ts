import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { GroupsService } from '../services/groups.service';
import { Group } from '../models/group';
import { tap } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CreateGroupDialogComponent } from '../create-group-dialog/create-group-dialog.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  recommended$: Observable<Group[]>;
  yourGroups$: Observable<Group[]>;
  hiddenRecomented: Array<boolean>;
  hiddenYour: Array<boolean>;

  sentGroup: Group;

  constructor(private router: Router,  public groupsService: GroupsService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.recommended$ = this.groupsService.getRecommendedGroups()
    .pipe(tap(rec => { this.hiddenRecomented = new Array<boolean>(); rec.forEach(q => this.hiddenRecomented.push(false)); }));
    this.yourGroups$ = this.groupsService.getYourGroups()
    .pipe(tap(rec => { this.hiddenYour = new Array<boolean>(); rec.forEach(q => this.hiddenYour.push(false)); }));
  }
  onJoinGroup(groupName) {

  }

  onCreateGroup() {
    this.router.navigateByUrl('/group-create');
  }

  displayRecommendedDetails(i : any){
   this.hiddenRecomented[i]=!this.hiddenRecomented[i];
  }

  displayYourDetails(i : any){
    this.hiddenYour[i]=!this.hiddenYour[i];
  }

  

  openCreateDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {sentGroup : this.sentGroup};
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, dialogConfig);
    dialogRef.afterClosed()
    .subscribe(response => {
      if(response){
       this.sentGroup=response;
       this.groupsService.createGroup(this.sentGroup);
       this.yourGroups$=this.groupsService.getYourGroups();
      } 
    });
  }
}

