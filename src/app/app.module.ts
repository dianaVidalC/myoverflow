import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

// ngx-moment
import { MomentModule } from 'ngx-moment';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { SigninScreenComponent } from './auth/signin-screen/signin-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
