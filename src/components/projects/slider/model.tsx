export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  demo: string;
  source: string;
  hrefDemo: string;
  hrefSource: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: 'DiKom',
    subtitle:
      'Participated in the development and layout of the site on React',
    demo: 'Demo',
    source: 'Source',
    hrefDemo: 'https://www.dikom.ru/',
    hrefSource: '',
  },
  {
    id: 2,
    title: 'IQ sleep',
    subtitle:
      'Participated in the development and layout of the site on JS',
    demo: 'Demo',
    source: 'Source',
    hrefDemo: 'https://iqsleep.ru/',
    hrefSource: '',
  },
  {
    id: 3,
    title: 'Empay',
    subtitle:
      'Participated in the development and layout of the site on React',
    demo: 'Demo',
    source: 'Source',
    hrefDemo: 'https://empay.com/',
    hrefSource: '',
  },
  {
    id: 4,
    title: 'Portfolio',
    subtitle: 'This portfolio project',
    demo: 'Demo',
    source: 'Source',
    hrefDemo: '#',
    hrefSource:
      'https://github.com/juliyastrilets/juliyastrilets.github.io',
  },
  // {
  //   id: 5,
  //   title: 'Example: TodoList Zustand',
  //   subtitle: 'Project implemented with the help Zustund',
  //   demo: 'Demo',
  //   source: 'Source',
  //   hrefDemo: '#',
  //   hrefSource: '#',
  // },
  // {
  //   id: 6,
  //   title: 'Example: TodoList Redux',
  //   subtitle: 'Project implemented with the help Redux.',
  //   demo: 'Demo',
  //   source: 'Source',
  //   hrefDemo: '#',
  //   hrefSource: '#',
  // },
  // {
  //   id: 7,
  //   title: 'Example: Market',
  //   subtitle: 'Project implemented React',
  //   demo: 'Demo',
  //   source: 'Source',
  //   hrefDemo: '#',
  //   hrefSource: '#',
  // },
];
