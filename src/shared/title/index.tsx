import styles from './style.module.scss';

interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return <h2 className={styles.title}>{text}</h2>;
};
