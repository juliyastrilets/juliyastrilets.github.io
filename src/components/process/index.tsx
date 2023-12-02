import styles from './style.module.scss';
import { ProcessSteps } from './model';
import { Title } from '@/shared/title';
import { Paragraph } from '@/shared/paragraph';

export const Process = () => {
  return (
    <>
      <div className={styles.text}>
        <Title text="Мой рабочий процесс" />
        <Paragraph text="Я полностью погружаюсь в процесс и обладаю высоким уровнем самодисциплины. Проще всего это можно описать жизненным циклом задачи." />
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
