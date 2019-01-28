import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.sass']
})
export class QuestionDetailComponent implements OnInit {
  question: Question = new Question(
    'Esta es una nueva pregunta sobre android',
    'Miren, tengo una duda con una aplicación que estoy haciendo para android...',
    new Date,
    'devicon-android-plain'
  );
  constructor() { }

  ngOnInit() {
  }

}
