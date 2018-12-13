import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

const OPERATIONS = [
  {name: 'Join Event', url: '/event-join'},
  {name: 'My Own Events', url: '/event-join'},
  {name: 'Create Event', url: '/event-create'},
  {name: 'Past Events', url: '/event-join'},
  {name: 'Send Invitations', url: '/event-join'},
  {name: 'Recent Events', url: '/event-join'}
];

@Component({
  selector: 'app-event-operations',
  templateUrl: './event-operations.component.html',
  styleUrls: ['./event-operations.component.scss']
})
export class EventOperationsComponent implements OnInit {

  EVENT_OPERATIONS = OPERATIONS;
  selectedOperation: string = this.EVENT_OPERATIONS[0].name;

  selectOperation(selectedOperation: string) {
    this.selectedOperation = selectedOperation;
    for (let i = 0; i < this.EVENT_OPERATIONS.length; i++) {
      if (selectedOperation === this.EVENT_OPERATIONS[i].name) {
        this.router.navigateByUrl(this.EVENT_OPERATIONS[i].url);
      }
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
