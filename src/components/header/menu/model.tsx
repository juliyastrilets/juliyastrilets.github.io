interface MenuItem {
  id: number;
  title: string;
  href: string;
}

export const MenuItems: MenuItem[] = [
  { id: 1, title: 'Work & Skills', href: '#skills' },
  { id: 2, title: 'Projects', href: '#projects' },
  { id: 3, title: 'Contacts', href: '#footer' },
];
