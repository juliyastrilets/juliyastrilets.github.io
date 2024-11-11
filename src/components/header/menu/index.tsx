import styles from './style.module.scss';
import { MenuItems } from './model';

export const Menu = () => {
  return (
    <ul className={styles.list}>
      {MenuItems.map((item) => (
        <li className={styles.item} key={item.id}>
          <a href={item.href}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
