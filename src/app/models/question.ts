export const enum QuestionInfluenceType {
  B, A, L, R
}

export class AnswerVariant {
  text: string;
  influence: QuestionInfluenceType;
}

export class ListedQuestion {
  question: Question;
  selectedAnswer?: AnswerVariant;

  constructor(question: Question) {
    this.question = question;
  }
}

export class Question {
  variants: AnswerVariant[];
}

export class QuizResultImmutable {
  private [QuestionInfluenceType.B]: number;
  private [QuestionInfluenceType.A]: number;
  private [QuestionInfluenceType.L]: number;
  private [QuestionInfluenceType.R]: number;

  constructor(B: number, A: number, L: number, R: number) {
    this[QuestionInfluenceType.B] = B;
    this[QuestionInfluenceType.A] = A;
    this[QuestionInfluenceType.L] = L;
    this[QuestionInfluenceType.R] = R;
  }
}

