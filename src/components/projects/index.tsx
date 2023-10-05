import styles from './style.module.scss';
import { Slider } from './slider';
import { Paragraph } from '@/shared/paragraph';
import { Title } from '@/shared/title';

export const Projects = () => {
  return (
    <>
      <div className={styles.text}>
        <Title text="My some projects" />
        <Paragraph
          text=" Since all my experience is commercial, I prepared a
          selection of my recent works.You can view the code by
          clicking on the project."
        />
      </div>
      <Slider />
    </>
  );
};
