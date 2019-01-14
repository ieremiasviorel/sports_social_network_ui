import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatCalendar } from '@angular/material';

import { EventsService } from '../services/events.service';
import { SPORTS, SKILL_LEVELS, TYPE } from '../constants';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  SPORTS = SPORTS;
  SKILL_LEVELS = SKILL_LEVELS;
  TYPE = TYPE;

  eventCreationForm: FormGroup;

  selectedDate: Date;
  @ViewChild(MatCalendar) _datePicker: MatCalendar<Date>;

  eventType: string;

  latitude: 46.7712;
  longitude: 23.6236;

  constructor(private router: Router,
    private eventsService: EventsService) { }

  ngOnInit() {
    this.eventCreationForm = new FormBuilder().group({
      name: new FormControl(),
      category: [''],
      skill: [''],
      participants: [''],
      type: [''],
      price: [''],
      description: [''],
      time: ['']
    });

    this._datePicker.selectedChange.subscribe((date: Date) => {
      this.eventCreationForm.controls['time'].setValue(date.toDateString());
      this.selectedDate = date;
    });
  }

  onCreate() {
    const eventToAdd = this.eventCreationForm.value;
    this.eventsService.joinEvent(eventToAdd);
    this.router.navigate(['/events/user']);
  }

  onCancel() {
    this.eventCreationForm.reset();
    this.selectedDate = null;
  }
}
