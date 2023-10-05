import styles from './style.module.scss';
import { Skill } from './model';
import { DashTitle } from '@/shared/dash-title';

interface SkillsListProps {
  title: string;
  color: 'blue' | 'orange' | 'green';
  items: Skill[];
}

export const SkillsList = ({
  title,
  color,
  items,
}: SkillsListProps) => {
  const wrapperClass = () => {
    return `${styles.wrapper} ${styles[`wrapper--${color}`]}`;
  };
  return (
    <ul className={wrapperClass()}>
      <DashTitle title={title} />
      {items.map((item) => (
        <li className={styles.listItem} key={item.id}>
          <div className={styles.itemDate}>{item.date}</div>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.itemText}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};
