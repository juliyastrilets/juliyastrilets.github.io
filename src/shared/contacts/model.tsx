interface Contact {
  id: number;
  href: string;
  image: string;
}

export const ContactList: Contact[] = [
  {
    id: 1,
    href: 'https://t.me/juliastrilets',
    image: '/icons/telegram.svg',
  },
  {
    id: 2,
    href: 'mailto:juliyastrilets@gmail.com',
    image: '/icons/gmail.svg',
  },
  {
    id: 3,
    href: 'https://career.habr.com/julia-strilets',
    image: '/icons/habr.jpg',
  },
];
