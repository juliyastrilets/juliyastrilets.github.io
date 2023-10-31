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
        <Paragraph text="In the frontend since 2020. I started with layout and expanded my knowledge as I worked. I regularly learn something new and increase my profits. All these years I've been working in a hospital and working on other people's code. I have no problems with communication, I love an active lifestyle, sports and travel." />
      </article>
    </div>
  );
};
