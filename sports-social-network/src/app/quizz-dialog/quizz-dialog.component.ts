import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-quizz-dialog',
  templateUrl: './quizz-dialog.component.html',
  styleUrls: ['./quizz-dialog.component.scss']
})
export class QuizzDialogComponent implements OnInit {

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<QuizzDialogComponent>
  ) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('/');
    this.dialogRef.close();
  }
}
