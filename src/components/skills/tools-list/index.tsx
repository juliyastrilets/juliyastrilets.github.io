import styles from './style.module.scss';
import { DashTitle } from '@/shared/dash-title';
import { Tools } from './model';
import Image from 'next/image';

export const ToolsList = () => {
  return (
    <>
      <div className={styles.title}>
        <DashTitle title="Инструменты и технологии" />
      </div>
      <ul className={styles.list}>
        {Tools.map((tool) => (
          <li key={tool.id} className={styles.listItem}>
            <Image
              className={styles.listItemImage}
              src={tool.img}
              width={48}
              height={48}
              alt={`${tool.title} logo`}
            />
            <h3 className={styles.listItemTitle}>{tool.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};
