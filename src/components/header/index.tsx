import styles from './style.module.scss';
import { Menu } from '@/components/header/menu';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.contentLeft}>
        <div className={styles.icon}>
          <Image
            src="/icons/smiley.svg"
            alt="icon"
            width={48}
            height={48}
          />
        </div>
        <span className={styles.text}>Стрилец</span>
      </div>
      <nav className={styles.contentRight}>
        <Menu />
      </nav>
    </header>
  );
};
