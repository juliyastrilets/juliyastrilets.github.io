import styles from './style.module.scss';
import { ProcessSteps } from './model';
import { Title } from '@/shared/title';
import { Paragraph } from '@/shared/paragraph';

export const Process = () => {
  return (
    <>
      <div className={styles.text}>
        <Title text="Working process" />
        <Paragraph text="I immerse myself in the process with my head and a high level of self-discipline. My workflow can be described by the life cycle of a task." />
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
