import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { QuizzService } from '../services/quizz.service';
import { QuizzQuestion } from '../models/quizz';
import { QuizzDialogComponent } from '../quizz-dialog/quizz-dialog.component';
import { SPORTS, QUIZZ_DIFFICULTY_LEVELS } from '../constants';

@Component({
  selector: 'app-join-quizz',
  templateUrl: './join-quizz.component.html',
  styleUrls: ['./join-quizz.component.scss']
})
export class JoinQuizzComponent implements OnInit {

  SPORTS = SPORTS;
  QUIZZ_DIFFICULTY_LEVELS = QUIZZ_DIFFICULTY_LEVELS;

  quizzControl = new FormControl('', [Validators.required]);
  diffControl = new FormControl('', [Validators.required]);
  started = false;
  quizzes$: Observable<QuizzQuestion[]>;
  quizzAnswers: Array<string>;

  constructor(
    private quizzService: QuizzService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.quizzes$ = this.quizzService.getAllQuestions()
      .pipe(tap(quizzes => { this.quizzAnswers = new Array<string>(); quizzes.forEach(q => this.quizzAnswers.push('')); }));
  }

  start() {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'quizz-dialog';

    this.dialog.open(QuizzDialogComponent, dialogConfig);
  }

  startQuizz(sport) {
    this.started = true;
  }
}
