import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


const SPORTS = [
  'Fotbal', 'Baschet' ,'Tenis'
];

const DIFICULTIES = [
  'Easy', 'Medium', 'Hard'
];

@Component({
  selector: 'app-join-quizz',
  templateUrl: './join-quizz.component.html',
  styleUrls: ['./join-quizz.component.scss']
})
export class JoinQuizzComponent implements OnInit {
 
  sports=SPORTS;
  difficulties=DIFICULTIES;
  quizzControl = new FormControl('', [Validators.required]);
  diffControl = new FormControl('', [Validators.required]);
  
  constructor() { }

  ngOnInit() {
  }

  start(){

  }

}
