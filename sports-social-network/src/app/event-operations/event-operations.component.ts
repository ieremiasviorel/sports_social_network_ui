import { Component, OnInit } from '@angular/core';

const OPERATIONS = [
  'Join Event', 'My Own Events', 'Create Event', 'Past Events', 'Post Photos', 'Send Invitations', 'Recent Events'
];

@Component({
  selector: 'app-event-operations',
  templateUrl: './event-operations.component.html',
  styleUrls: ['./event-operations.component.scss']
})
export class EventOperationsComponent implements OnInit {

  EVENT_OPERATIONS = OPERATIONS;

  constructor() { }

  ngOnInit() {
  }

}
