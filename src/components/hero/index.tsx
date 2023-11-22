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
          text="In the frontend since 2020. I have successfully conducted three major releases, the current project is huge and is in a pre-release state. I regularly learn something new and improve my professionalism.
For all the years I have been working in a team and dealing with someone else's code. I have no problems in communication, I love an active lifestyle, sports and travel."
        />
      </article>
    </div>
  );
};
