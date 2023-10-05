import styles from './style.module.scss';
import Image from 'next/image';
import { DashTitle } from '@/shared/dash-title';
import { Paragraph } from '@/shared/paragraph';

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperImg}>
        <Image
          className={styles.img}
          src="/img/user.webp"
          alt="icon"
          width={534}
          height={534}
          priority
        />
      </div>
      <article className={styles.info}>
        <div className={styles.caption}>
          <DashTitle title="Frontend Developer" long />
        </div>
        <h1 className={styles.title}>
          Hello, I’m <br />
          Julia Strilets
        </h1>
        <Paragraph
          text="I’m a web interface developer with a keen eye for details. I
          was trained at HTML-Academy and continue to improve. I have
          good teachers and mentors. I love my job and work with
          pleasure and dedication."
        />
      </article>
    </div>
  );
};
