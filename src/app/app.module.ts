import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {QuizComponent} from './components/quiz/quiz.component';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    QuizComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
