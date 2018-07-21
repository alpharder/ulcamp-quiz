import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {QuizComponent} from './components/quiz/quiz.component';
import {AppComponent} from './app.component';
import {QuizResultChartComponent} from './components/quiz-result-chart/quiz-result-chart.component';
import {AmChartsModule} from '@amcharts/amcharts3-angular';

@NgModule({
  declarations: [
    QuizComponent,
    QuizResultChartComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
