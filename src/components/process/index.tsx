import styles from './style.module.scss';
import { ProcessSteps } from './model';
import { Title } from '@/shared/title';
import { Paragraph } from '@/shared/paragraph';

export const Process = () => {
  return (
    <>
      <div className={styles.text}>
        <Title text="Working process" />
        <Paragraph
          text="In my work, accessibility of interfaces and code quality are
        important to me. Semantics and cross-browser compatibility are
        not empty words for me."
        />
      </div>
      <ul className={styles.list}>
        {ProcessSteps.map((step) => (
          <li key={step.id} className={styles.item}>
            <span>{step.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
