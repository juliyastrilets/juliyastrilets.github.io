import styles from './style.module.scss';
import { Slide } from '../model';

interface ProjectSlideProps {
  slide: Slide;
}

export const ProjectSlide = ({ slide }: ProjectSlideProps) => {
  return (
    <div className={styles.slide}>
      <div className={styles.main}>
        <h3 className={styles.title}>{slide.title}</h3>
        <p className={styles.subtitle}>{slide.subtitle}</p>
      </div>
      <div className={styles.footer}>
        <a
          className={styles.button}
          href={slide.hrefDemo}
          target="_blank"
        >
          {slide.demo}
        </a>
        {slide.hrefSource && (
          <>
            <div className={styles.verticalSeparator} />
            <a
              className={styles.button}
              href={slide.hrefSource}
              target="_blank"
            >
              {slide.source}
            </a>
          </>
        )}
      </div>
    </div>
  );
};
