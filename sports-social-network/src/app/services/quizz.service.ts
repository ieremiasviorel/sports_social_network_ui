import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { QuizzQuestion } from '../models/quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllQuestions(): Observable<QuizzQuestion[]> {
    const fileUrl = '../../assets/demo-data/quizz.json';
    return this.httpClient.get<QuizzQuestion[]>(fileUrl);
  }
}
