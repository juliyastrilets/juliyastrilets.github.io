export interface Skill {
  id: number;
  date: string;
  title: string;
  text: string;
}

export const EducationList: Skill[] = [
  {
    id: 1,
    date: 'May 2021 – July 2021',
    title: 'HTML Academy',
    text: 'JavaScript. Professional development of web interfaces',
  },
  {
    id: 2,
    date: 'August 2020 – October 2020',
    title: 'HTML Academy',
    text: 'HTML and CSS. Adaptive layout and automation',
  },
  {
    id: 3,
    date: 'March 2020 – May 2020',
    title: 'HTML Academy',
    text: 'HTML and CSS. Professional website layout',
  },
  {
    id: 4,
    date: 'September 2004 - May 2009',
    title: 'Khmelnitsky National University',
    text: 'Marketing',
  },
];

export const WorkHistoryList: Skill[] = [
  {
    id: 1,
    date: 'November 2021 - Until now',
    title: 'Empay Fintech, Moscow',
    text: 'Frontend Developer',
  },
  {
    id: 2,
    date: 'May 2021- November 2021',
    title: 'MEIJI MEDIA, Moscow',
    text: 'Web development, BEM, Sass, Pug, JavaScript, JQuery, Gulp, Git',
  },
  {
    id: 3,
    date: 'March 2020 - May 2021',
    title: 'Valimark Trade LP, Dublin',
    text: 'HTML, CSS, Pug, Webpack, Git, БЭМ, Adaptive layout, Cross-browser layout',
  },
];
