import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Question } from '../question-detail/question.model';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.sass']
})
export class AnswerFormComponent implements OnInit {
  @Input() question: Question;
  constructor() { }

  ngOnInit() {
  }
  onSubmit (form: NgForm) {
    const answer = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User(null, null, 'Paula', 'Becerra')
    );
    this.question.answers.unshift(answer);
    form.reset();
  }
}
