import { Component, OnInit } from '@angular/core';


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

  }

  constructor() { }

  ngOnInit() {
  }



}
