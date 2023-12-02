import styles from './style.module.scss';
import { Slider } from './slider';
import { Paragraph } from '@/shared/paragraph';
import { Title } from '@/shared/title';

export const Projects = () => {
  return (
    <>
      <div className={styles.text}>
        <Title text="Проекты" />
        <Paragraph text="Вы можете познакомиться с проектами в создании которых я принимала участие. А так же с проектами демонстрирующими мои навыки с примерами кода" />
      </div>
      <Slider />
    </>
  );
};
