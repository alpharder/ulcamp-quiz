import {Question, QuestionInfluenceType} from './models/question';
import {QuadrantFields, SubQuadrantDefinition, SubQuadrantPositionTypes} from './models/result-graph';

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

export const QUADRANT_LIST: QuadrantFields[] = [
  {
    coords: {
      x1: -10, x2: 0,
      y1: 0, y2: 10,
    },
    color: '#c55f5c',
    labelText: 'Analytical',
    labelColor: '#fff',
  },
  {
    coords: {
      x1: 0, x2: 10,
      y1: 0, y2: 10,
    },
    color: '#557a95',
    labelText: 'Driver',
    labelColor: '#fff',
  },
  {
    coords: {
      x1: -10, x2: 0,
      y1: -10, y2: 0,
    },
    color: '#e200fe',
    labelText: 'Amiable',
    labelColor: '#fff',
  },
  {
    coords: {
      x1: 0, x2: 10,
      y1: -10, y2: 0,
    },
    color: '#36af4b',
    labelText: 'Expressive',
    labelColor: '#fff',
  }
];

export const SUBQUADRANT_LIST: SubQuadrantDefinition[] = [
  {
    position: SubQuadrantPositionTypes.BL,
    labelText: 'AM',
    labelColor: '#fff',
  },
  {
    position: SubQuadrantPositionTypes.TL,
    labelText: 'AN',
    labelColor: '#fff',
  },
  {
    position: SubQuadrantPositionTypes.BR,
    labelText: 'EX',
    labelColor: '#fff',
  },
  {
    position: SubQuadrantPositionTypes.TR,
    labelText: 'DR',
    labelColor: '#fff',
  }
];
