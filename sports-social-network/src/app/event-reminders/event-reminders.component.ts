import { Component, OnInit } from '@angular/core';

const REMINDERS = [
  { name: 'Fotbal intre prieteni', time: 1, unit: 'day'},
  { name: 'Alergare in parcul central', time: 30, unit: 'mins'},
  { name: 'Volei profesionist', time: 5, unit: 'h'}
];

const OPTIONS = [
  {name: 'Baschet in parcul Babes'},
  {name: 'Concurs de inot'}
];

@Component({
  selector: 'app-event-reminders',
  templateUrl: './event-reminders.component.html',
  styleUrls: ['./event-reminders.component.scss']
})
export class EventRemindersComponent implements OnInit {

  yourReminders = REMINDERS;
  yourOptions = OPTIONS;

  constructor() { }

  ngOnInit() {
  }

}
