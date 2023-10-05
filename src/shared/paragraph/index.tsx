import styles from './style.module.scss';

interface ParagraphProps {
  text: string;
}

export const Paragraph = ({ text }: ParagraphProps) => {
  return <p className={styles.paragraph}>{text}</p>;
};
