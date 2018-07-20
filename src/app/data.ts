import {Question, QuestionInfluenceType} from './models/question';

export const QUESTION_LIST: Question[] = [
  {
    variants: [
      {
        text: 'More use of hands when talking.',
        influence: QuestionInfluenceType.B,
      },
      {
        text: 'Less use of hands when talking.',
        influence: QuestionInfluenceType.A,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Speaks in a softer tone of voice.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'Speaks in a louder tone of voice',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Uses many body movements.',
        influence: QuestionInfluenceType.B,
      },
      {
        text: 'Uses few body movements.',
        influence: QuestionInfluenceType.A,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Speaks and moves at a slower pace.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'Speaks and moves at a quicker pace.',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Has more animated facial expressions.',
        influence: QuestionInfluenceType.B,
      },
      {
        text: 'Has more subtle facial expressions.',
        influence: QuestionInfluenceType.A,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Tends to speak less and listen more.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'Tends to speak more and listen less.',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Appears more outgoing.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'Appears more serious.',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Leans back when talking.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'Leans forward when talking.',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Is more structured with time.',
        influence: QuestionInfluenceType.B,
      },
      {
        text: 'Is more flexible with time.',
        influence: QuestionInfluenceType.A,
      },
    ],
  },
  {
    variants: [
      {
        text: 'States opinions and facts more mildly.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'States opinions and facts more strongly.',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Tends to tell stories and use metaphors.',
        influence: QuestionInfluenceType.B,
      },
      {
        text: 'Tends to talk about information and tasks.',
        influence: QuestionInfluenceType.A,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Takes more time to make decisions.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'Makes decisions quickly.',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Easy to get to know.',
        influence: QuestionInfluenceType.B,
      },
      {
        text: 'Not as easy to get to know.',
        influence: QuestionInfluenceType.A,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Is more cautious about taking risks.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'Takes risks and will move forward without all the answers.',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Decides more often based on feelings.',
        influence: QuestionInfluenceType.B,
      },
      {
        text: 'Decides more often based on facts and logic.',
        influence: QuestionInfluenceType.A,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Does not pressure others for answers.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'Likes to get answers quickly.',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Tends to be more social.',
        influence: QuestionInfluenceType.B,
      },
      {
        text: 'Prefers to spend time alone.',
        influence: QuestionInfluenceType.A,
      },
    ],
  },
  {
    variants: [
      {
        text: 'Makes less direct eye contact.',
        influence: QuestionInfluenceType.L,
      },
      {
        text: 'Makes more direct eye contact.',
        influence: QuestionInfluenceType.R,
      },
    ],
  },
];
