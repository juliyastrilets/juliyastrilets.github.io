interface Link {
  id: number;
  title: string;
  href: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  links: Link[];
}

export const slides: Slide[] = [
  {
    id: 1,
    title: 'DiKom',
    subtitle:
      'Participated in the development and layout of the site on React',

    links: [{ id: 1, title: 'Demo', href: 'https://www.dikom.ru/' }],
  },
  {
    id: 2,
    title: 'IQ sleep',
    subtitle:
      'Participated in the development and layout of the site on JS',
    links: [{ id: 1, title: 'Demo', href: 'https://iqsleep.ru/' }],
  },
  {
    id: 3,
    title: 'Empay',
    subtitle:
      'Participated in the development and layout of the site on React. This is just a landing page, the main project in development.',
    links: [{ id: 1, title: 'Demo', href: 'https://empay.com/' }],
  },
  {
    id: 4,
    title: 'Portfolio',
    subtitle: 'Source of this portfolio',
    links: [
      {
        id: 1,
        title: 'Source',
        href: 'https://github.com/juliyastrilets/juliyastrilets.github.io',
      },
    ],
  },
  // {
  //   id: 5,
  //   title: 'Example: TodoList with Zustand',
  //   subtitle: 'Project implemented with the help Zustand',
  //   links: [
  //     {
  //       id: 1,
  //       title: 'Demo',
  //       href: 'https://juliyastrilets.github.io/todos-zustand/',
  //     },
  //     {
  //       id: 2,
  //       title: 'Source',
  //       href: 'https://github.com/juliyastrilets/todos-zustand',
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'Example: TodoList Redux',
  //   subtitle: 'Project implemented with the help Redux.',
  //   links: []
  // },
  // {
  //   id: 7,
  //   title: 'Example: Market',
  //   subtitle: 'Project implemented React',
  //   links: []
  // },
];
