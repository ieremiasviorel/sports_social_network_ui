import { Component, OnInit } from '@angular/core';

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

  type = TYPE;
  sports = SPORTS;

  onCreate(eventName) {
    console.log('Create clicked');
    console.log(eventName.value);
  }

  onCancel() {
    console.log('Cancel clicked');
  }
  constructor() { }

  ngOnInit() {
  }

}
