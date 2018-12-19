import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

const RECOMMENDED = [
  {name:'Fotbal'},
  {name:'Baschet'}
];

const YOUR_GROUPS = [
  {name:'Rugby', status:'Full'},
  {name:'Tenis', status:'Mue'}
];

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  recommended = RECOMMENDED;
  yourGroups = YOUR_GROUPS;



  onJoinGroup(groupName) {

  }

  onCreateGroup() {
    this.router.navigateByUrl('/group-create');
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }



}
