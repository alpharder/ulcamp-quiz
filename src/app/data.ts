import {Question, QuestionInfluenceType} from './models/question';
import {QuadrantFields, SubQuadrantDefinition, SubQuadrantPositionTypes} from './models/result-graph';

export const QUESTION_LIST: Question[] = [
  {
    variants: [
      {
        text: {en: 'You seldom use your hands when you speak', ru: 'Предпочитаю не жестикулировать при разговоре.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'You use your hands a lot when you speak.', ru: 'Часто и много жестикулирую при разговоре.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You speak in a louder manner.', ru: 'Часто разговариваю громко.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'You speak with a quieter or slower manner.', ru: 'Разговариваю тихим голосом.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You use minimal body or gestures movements', ru: 'Практически не двигаюсь при разговоре.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'You use many body gestures or movements.', ru: 'Использую язык тела при разговоре.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Your speech and movements are usually at a faster pace.', ru: 'Говорю и двигаюсь довольно быстро.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'Your speech and movements tend to be at a slower pace.', ru: 'Говорю и двигаюсь довольно медленно.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'Your face uses few animated expressions.', ru: 'Мои выражения лица трудноуловимы.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'Your face uses more animated expressions.', ru: 'У меня всё написано на лице.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You like speaking more than listening.', ru: 'Предпочитаю говорить, нежели слушать.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'You like to listen more than you speak.', ru: 'Предпочитаю слушать, нежели говорить.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You are more serious and concentrated.', ru: 'Выгляжу серьёзно.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'You are more outgoing and lively.', ru: 'Выгляжу дружелюбно.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You often lean forward when speaking with someone.', ru: 'Наклоняюсь к собеседнику при разговоре.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'You often lean back when speaking with someone.', ru: 'Откидываюсь на спину при разговоре.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You are quite flexible with your time.', ru: 'Планирую дела на ходу, люблю гибкий распорядок дня.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'You are rigid and structured with your time.', ru: 'Для меня важно иметь четкое и упорядоченное расписание.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You strongly give your opinions.', ru: 'Уверенно выражаю мнение.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'You tend to give your opinions more mildly', ru: 'Мягко выражаю мнение.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You would rather speak about information and objectives.', ru: 'Предпочитаю обсуждать непосредственно работу.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'You prefer to tell stories and use metaphors in your speech.', ru: 'Люблю рассказывать истории.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You trust your instinct and decide quickly.', ru: 'Я склонен быстро принимать решения.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'You would be more comfortable spending a lot of time to make a decision.', ru: 'Мне нужно время, чтобы принять решение.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'It takes a long time for people to get to know you better.', ru: 'Меня не так легко узнать поближе.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'It is easy for people to meet and learn more about you.', ru: 'Меня легко узнать поближе.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You are willing to take risks and proceed without all the information.', ru: 'Рискую и легко двигаюсь дальше.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'You are more cautious and like to minimize risks.', ru: 'Осторожно отношусь к риску.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You rely on facts and logic when deciding.', ru: 'Принимаю решения, основываясь на фактах и логике.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'You use your inner feelings and instincts when deciding.', ru: 'Принимаю решения, руководствуясь на чувствах и эмоциях.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You prefer to get answers quickly by any means.', ru: 'Предпочитаю получать ответы быстро.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'You do not like to put pressure on others for quick answers.', ru: 'Не давлю на других.'},
        influence: QuestionInfluenceType.L,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You prefer to be alone.', ru: 'Предпочитаю проводить время в одиночестве.'},
        influence: QuestionInfluenceType.A,
      },
      {
        text: {en: 'You are very social.', ru: 'Тянусь к общению, коллективу.'},
        influence: QuestionInfluenceType.B,
      },
    ],
  },
  {
    variants: [
      {
        text: {en: 'You find it easy to keep direct eye contact.', ru: 'Смотрю собеседнику в глаза.'},
        influence: QuestionInfluenceType.R,
      },
      {
        text: {en: 'You do not make eye contact often.', ru: 'Избегаю зрительного контакта.'},
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
