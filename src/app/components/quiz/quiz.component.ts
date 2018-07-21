import {Component, OnInit} from '@angular/core';
import {QUESTION_LIST} from '../../data';
import {AnswerVariant, ListedQuestion, Question, QuestionInfluenceType, QuizResultImmutable} from '../../models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  private readonly questions = QUESTION_LIST;
  protected readonly listed_questions: ListedQuestion[];
  protected answered_question_cnt = 0;
  protected completion_percentage = 0;
  protected result_is_available = false;
  protected modal_is_opened = false;
  protected result?: QuizResultImmutable;

  private intersectionObserver: IntersectionObserver;

  constructor() {
    this.listed_questions = this.questions.map((question: Question) => new ListedQuestion(question));

    const scrolledElBlinkClass = 'has-background-grey-light';

    this.intersectionObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add(scrolledElBlinkClass);
        setTimeout(() => entry.target.classList.remove(scrolledElBlinkClass), 800);
      }
    });
  }

  static calculateCompletionPercentage(totalQuestionCnt: number, answeredQuestionCnt: number): number {
    return (totalQuestionCnt === 0)
      ? 0
      : Math.round(100 * (answeredQuestionCnt / totalQuestionCnt));
  }

  ngOnInit(): void {
  }

  selectAnswer(question: ListedQuestion, answer: AnswerVariant) {
    question.selectedAnswer = answer;
    this.intersectionObserver.disconnect();
    this.updateAnsweredQuestionCnt();
    this.updateCompletionPercentage();
    this.updateResult();
  }

  showResults() {
    if (this.result_is_available) {
      this.openModal();
    } else {
      const firstUnanswered = document.querySelector('.is-unanswered');
      if (firstUnanswered) {
        this.intersectionObserver.observe(firstUnanswered);
        firstUnanswered.scrollIntoView({behavior: 'smooth'});
      }
    }
  }

  private openModal() {
    this.modal_is_opened = true;
  }
  private closeModal() {
    this.modal_is_opened = false;
  }

  private updateAnsweredQuestionCnt() {
    this.answered_question_cnt = this.listed_questions.filter((q: ListedQuestion) => q.selectedAnswer !== undefined).length;
  }

  private updateCompletionPercentage() {
    this.completion_percentage = QuizComponent.calculateCompletionPercentage(this.listed_questions.length, this.answered_question_cnt);
  }

  private updateResult() {
    if (this.listed_questions.length > 0 && this.listed_questions.length === this.answered_question_cnt) {
      this.result_is_available = true;

      const result = {
        [QuestionInfluenceType.B]: 0,
        [QuestionInfluenceType.A]: 0,
        [QuestionInfluenceType.L]: 0,
        [QuestionInfluenceType.R]: 0,
      };

      this.listed_questions.forEach((question) => result[question.selectedAnswer.influence]++);

      this.result = new QuizResultImmutable(
        result[QuestionInfluenceType.B],
        result[QuestionInfluenceType.A],
        result[QuestionInfluenceType.L],
        result[QuestionInfluenceType.R]
      );
    }
  }
}
