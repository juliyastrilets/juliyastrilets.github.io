import styles from './style.module.scss';

interface DashTitleProps {
  title: string;
  long?: boolean;
}

export const DashTitle = ({ title, long }: DashTitleProps) => {
  return (
    <h2 className={`${styles.title} ${long ? styles.long : ''}`}>
      {title}
    </h2>
  );
};
