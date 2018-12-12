import { Component, OnInit } from '@angular/core';

const EVENTS = [
  { name: 'Fotbal Marasti', price: 0 },
  { name: 'Baschet Observator', price: 10 }
];

const SPORTS = [
  'Fotbal', 'Baschet'
];

const SKILL = [
  'Beginner', 'Intermediate', 'Advanced'
];


@Component({
  selector: 'app-event-join',
  templateUrl: './event-join.component.html',
  styleUrls: ['./event-join.component.scss']
})
export class EventJoinComponent implements OnInit {

  events = EVENTS;
  sports = SPORTS;
  skill = SKILL;

  onJoinEvent() {

  }
  constructor() { }

  ngOnInit() {
  }

}
