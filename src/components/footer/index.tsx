import styles from './style.module.scss';
import { Contacts } from '@/shared/contacts';
import { Paragraph } from '@/shared/paragraph';

interface FooterProps
  extends React.ButtonHTMLAttributes<HTMLElement> {}

export const Footer = ({ ...extendProps }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const paragraphText = `Юлия Стрилец, ${currentYear}`;

  return (
    <footer className={styles.wrapper} {...extendProps}>
      <div className={styles.contacts}>
        <Contacts />
      </div>
      <Paragraph text={paragraphText} />
    </footer>
  );
};
