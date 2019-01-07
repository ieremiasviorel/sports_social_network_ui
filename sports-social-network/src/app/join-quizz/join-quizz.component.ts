import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormControl, Validators} from '@angular/forms';

import { QuizzService } from '../services/quizz.service';
import { QuizzQuestion } from '../models/quizz';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { QuizzDialogComponent } from '../quizz-dialog/quizz-dialog.component';


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
  started=false;
  quizzes$: Observable<QuizzQuestion[]>;
  
  constructor(
    private quizzService: QuizzService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.quizzes$=this.quizzService.getAllQuestions();
    }

  start(){
  }
  
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass='quizz-dialog';

    this.dialog.open(QuizzDialogComponent, dialogConfig);
}
    
    startQuizz(sport){
    this.started=true;
    }
}
