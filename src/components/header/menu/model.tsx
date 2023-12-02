interface MenuItem {
  id: number;
  title: string;
  href: string;
}

export const MenuItems: MenuItem[] = [
  { id: 1, title: 'Работа и навыки', href: '#skills' },
  { id: 2, title: 'Проекты', href: '#projects' },
  { id: 3, title: 'Контакты', href: '#footer' },
];
