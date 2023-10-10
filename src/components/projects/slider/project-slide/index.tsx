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
        {slide.links.map((link) => (
          <a
            className={styles.button}
            key={link.id}
            href={link.href}
            target="_blank"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};
