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
  {
    id: 2,
    title: 'Example: TodoList with Redux Toolkit',
    subtitle: 'Project implemented with the help Redux.',
    links: [
      {
        id: 1,
        title: 'Source',
        href: 'https://github.com/juliyastrilets/todos-redux',
      },
    ],
  },
  {
    id: 3,
    title: 'Example: TodoList with Zustand',
    subtitle: 'Project implemented with the help Redux.',
    links: [
      {
        id: 1,
        title: 'Source',
        href: 'https://github.com/juliyastrilets/todos-redux',
      },
      {
        id: 2,
        title: 'Demo',
        href: 'https://juliyastrilets.github.io/todos-zustand/',
      },
    ],
  },
  {
    id: 4,
    title: 'DiKom',
    subtitle:
      'Participated in the development and layout of the site on React',

    links: [{ id: 1, title: 'Demo', href: 'https://www.dikom.ru/' }],
  },
  {
    id: 5,
    title: 'IQ sleep',
    subtitle:
      'Participated in the development and layout of the site on JS',
    links: [{ id: 1, title: 'Demo', href: 'https://iqsleep.ru/' }],
  },
  {
    id: 6,
    title: 'Empay',
    subtitle:
      'Participated in the development and layout of the site on React. This is just a landing page, the main project in development.',
    links: [{ id: 1, title: 'Demo', href: 'https://empay.com/' }],
  },
];
