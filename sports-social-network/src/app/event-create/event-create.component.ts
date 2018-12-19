import { Component, OnInit } from '@angular/core';

const SPORTS = [
  'Fotbal', 'Baschet'
];

const SKILL = [
  'Beginner', 'Intermediate', 'Advanced'
];

const TYPE = [
  'Public', 'Private'
];

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  eventNamePlaceholer = 'Type name of the event';
  sports = SPORTS;
  skill = SKILL;
  type = TYPE;

  latitude: 46.7712;
  longitude: 23.6236;

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
