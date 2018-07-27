import {Question, QuestionInfluenceType} from './models/question';
import {QuadrantFields, SubQuadrantDefinition, SubQuadrantPositionTypes} from './models/result-graph';

export const QUESTION_LIST: Question[] = [
  {
    variants: [
      {
        text: {en: 'Less use of hands when talking.', ru: 'Предпочитаю не жестикулировать при разговоре.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'More use of hands when talking.', ru: 'Часто и много жестикулирую при разговоре.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Speaks in a louder tone of voice.', ru: 'Часто разговариваю громко.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'Speaks in a softer tone of voice.', ru: 'Разговариваю тихим голосом.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Uses few body movements.', ru: 'Практически не двигаюсь при разговоре.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'Uses many body movements.', ru: 'Использую язык тела при разговоре.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Speaks and moves at a quicker pace.', ru: 'Говорю и двигаюсь довольно быстро.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'Speaks and moves at a slower pace.', ru: 'Говорю и двигаюсь довольно медленно.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Has more subtle facial expressions.', ru: 'Мои выражения лица трудноуловимы.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'Has more animated facial expressions.', ru: 'У меня всё написано на лице.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Tends to speak more and listen less.', ru: 'Предпочитаю говорить, нежели слушать.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'Tends to speak less and listen more.', ru: 'Предпочитаю слушать, нежели говорить.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Appears more serious.', ru: 'Выгляжу серьёзно.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'Appears more outgoing.', ru: 'Выгляжу дружелюбно.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Leans forward when talking.', ru: 'Наклоняюсь к собеседнику при разговоре.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'Leans back when talking.', ru: 'Откидываюсь на спину при разговоре.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Is more flexible with time.', ru: 'Планирую дела на ходу, люблю гибкий распорядок дня.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'Is more structured with time.', ru: 'Для меня важно иметь четкое и упорядоченное расписание.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'States opinions and facts more strongly.', ru: 'Уверенно выражаю мнение.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'States opinions and facts more mildly.', ru: 'Мягко выражаю мнение.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Tends to talk about information and tasks.', ru: 'Предпочитаю обсуждать непосредственно работу.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'Tends to tell stories and use metaphors.', ru: 'Люблю рассказывать истории.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Makes decisions quickly.', ru: 'Я склонен быстро принимать решения.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'Takes more time to make decisions.', ru: 'Мне нужно время, чтобы принять решение.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Not as easy to get to know.', ru: 'Меня не так легко узнать поближе.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'Easy to get to know.', ru: 'Меня легко узнать поближе.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Takes risks and will move forward without all the answers.', ru: 'Рискую и легко двигаюсь дальше.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'Is more cautious about taking risks.', ru: 'Осторожно отношусь к риску.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Decides more often based on facts and logic.', ru: 'Принимаю решения, основываясь на фактах и логике.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'Decides more often based on feelings.', ru: 'Принимаю решения, руководствуясь на чувствах и эмоциях.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Likes to get answers quickly.', ru: 'Предпочитаю получать ответы быстро.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'Does not pressure others for answers.', ru: 'Не давлю на других.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Prefers to spend time alone.', ru: 'Предпочитаю проводить время в одиночестве.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'Tends to be more social.', ru: 'Тянусь к общению, коллективу.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Makes more direct eye contact.', ru: 'Смотрю собеседнику в глаза.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'Makes less direct eye contact.', ru: 'Избегаю зрительного контакта.'},
        influence: QuestionInfluenceType.L,
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
