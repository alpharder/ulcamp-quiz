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
  readonly listed_questions: ListedQuestion[];
  answered_question_cnt = 0;
  completion_percentage = 0;
  result_is_available = false;
  modal_is_opened = false;
  result?: QuizResultImmutable;

  language = 'en';
  languages = [{code: 'en', title: 'English'}, {code: 'ru', title: 'Русский'}];

  langSwitchActive = false;

  messages = {
    switch_lang: {
      ru: 'Language',
      en: 'Язык',
    },
    p1: {
      en: 'Which of these statements best describes your personal style at work?',
      ru: 'Какие из этих утверждений лучше всего описывают ваше поведение на работе?',
    },
    p2: {
      en: 'In each pair, check one answer.',
      ru: 'Выберите один ответ в каждой паре.',
    }
  };

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

  switchLang(langCode) {
    this.langSwitchActive = false;
    this.language = langCode;
    return false;
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

  closeModal() {
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
