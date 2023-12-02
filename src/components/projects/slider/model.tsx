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
    title: 'Empay',
    subtitle:
      'Проект для сбора средств на реализацию идей и благотварительность',
    links: [{ id: 1, title: 'Сайт', href: 'https://empay.com/' }],
  },
  {
    id: 2,
    title: 'ДиКом',
    subtitle: 'Официальный сайт завода «Диком»',
    links: [{ id: 1, title: 'Сайт', href: 'https://www.dikom.ru/' }],
  },
  {
    id: 3,
    title: 'IQ sleep',
    subtitle: 'Магазин товаров для сна',
    links: [{ id: 1, title: 'Сайт', href: 'https://iqsleep.ru/' }],
  },
  {
    id: 4,
    title: 'Cписок задач',
    subtitle:
      'Пример кода приложения для списка задач с применением Next.js и Zustand. Настроен деплой',
    links: [
      {
        id: 1,
        title: 'Github',
        href: 'https://github.com/juliyastrilets/todos-zustand',
      },
      {
        id: 2,
        title: 'Сайт',
        href: 'https://juliyastrilets.github.io/todos-zustand/',
      },
    ],
  },
  {
    id: 5,
    title: 'Портфолио',
    subtitle: 'Источник кода данного портфолио на github',
    links: [
      {
        id: 1,
        title: 'Github',
        href: 'https://github.com/juliyastrilets/juliyastrilets.github.io',
      },
    ],
  },
  {
    id: 6,
    title: 'Cписок задач',
    subtitle:
      'Пример кода приложения для списка задач с применением Next.js и Redux Toolkit',
    links: [
      {
        id: 1,
        title: 'Github',
        href: 'https://github.com/juliyastrilets/todos-redux',
      },
    ],
  },
];
