import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const ScrollTop = () => {
  return (
    <Link className={styles.button} href={'#home'}>
      <div className={styles.icon}>
        <Image
          src="/icons/arrow.svg"
          alt="icon"
          width={24}
          height={24}
        />
      </div>
    </Link>
  );
};
