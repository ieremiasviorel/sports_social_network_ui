import { Component, OnInit } from '@angular/core';

import { EventsService } from '../services/events.service';
import { RemindersService } from '../services/reminders.service';
import { Event } from '../models/event';
import { Reminder } from '../models/reminder';

import { REPETITION } from '../constants';

@Component({
  selector: 'app-event-reminders',
  templateUrl: './event-reminders.component.html',
  styleUrls: ['./event-reminders.component.scss']
})
export class EventRemindersComponent implements OnInit {

  repetitions = REPETITION;
  yourOptions = [];

  yourReminders: Reminder[];
  events: Event[];
  selectedReminder: Reminder;

  remindDate: Date;
  remindTimeStr: string;

  constructor(private eventsService: EventsService, private remindersService: RemindersService) {
  }

  ngOnInit() {
    this.remindDate = new Date();
    this.remindDate.setHours(7, 0, 0);
    this.remindTimeStr = this.remindDate.toTimeString().slice(0, 5);

    this.eventsService.getUserEvents().subscribe(events => {
      this.yourOptions = events;
    });

    this.remindersService.getReminders().subscribe(reminders => {
      this.yourReminders = reminders;
    });
  }

  onAddReminder(event, remindTime, numberOf, repetition) {
    const newReminder: Reminder = new Reminder();

    newReminder.name = event.value;
    newReminder.time = remindTime;
    if (numberOf.value > 24) {
      newReminder.count = 24;
    } else {
      newReminder.count = numberOf.value;
    }
    newReminder.unit = repetition.value;

    this.remindersService.createReminder(newReminder);
    this.yourReminders.push(newReminder);

    this.yourOptions = this.yourOptions.filter(op => op.name !== event.value);
    event.placeholder = 'Event';
  }

  onRemoveReminder() {
    if (this.selectedReminder) {
      console.log(this.selectedReminder);
      this.remindersService.removeReminder(this.selectedReminder);
      this.yourReminders = this.yourReminders.filter(rem => rem.name !== this.selectedReminder.name);

      this.yourOptions.push(this.selectedReminder);
    }
  }

  decrementTimeInput(): void {
      this.remindDate.setHours(this.remindDate.getHours() - 1);
      this.remindTimeStr = this.remindDate.toTimeString().slice(0, 5);
  }

  incrementTimeInput(): void {
      this.remindDate.setHours(this.remindDate.getHours() + 1);
      this.remindTimeStr = this.remindDate.toTimeString().slice(0, 5);
  }


  selectReminder(reminder) {
    console.log(reminder);
    this.selectedReminder = reminder;
  }
}
