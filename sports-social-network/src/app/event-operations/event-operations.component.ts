import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const OPERATIONS = [
  { name: 'Join Event', url: '/event-join' },
  { name: 'My Own Events', url: '/event-user' },
  { name: 'Create Event', url: '/event-create' },
  { name: 'Past Events', url: '/event-join' },
  { name: 'Send Invitations', url: '/event-join' },
  { name: 'Recent Events', url: '/event-join' }
];

@Component({
  selector: 'app-event-operations',
  templateUrl: './event-operations.component.html',
  styleUrls: ['./event-operations.component.scss']
})
export class EventOperationsComponent implements OnInit {

  EVENT_OPERATIONS = OPERATIONS;

  selectedOperation = this.EVENT_OPERATIONS[0];

  selectOperation(selectedOperation) {
    console.log(selectedOperation);
    this.selectedOperation = selectedOperation;
    console.log(this.selectedOperation);
    const navigateUrl = this.EVENT_OPERATIONS.find(op => op.name === this.selectedOperation.name).url;
    this.router.navigate([navigateUrl]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
