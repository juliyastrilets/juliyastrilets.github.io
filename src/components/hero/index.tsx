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
          <DashTitle title="Разработчик интерфейсов" long />
        </div>
        <h1 className={styles.title}>
          Привет, <br />
          Меня зовут Юля
        </h1>
        <Paragraph text="В разработке с 2020 года. Успешно провела три крупных релиза, текущий проект огромен и находится в предрелизном состоянии. Регулярно узнаю что-то новое, повышаю свой профессионализм, обращаюсь к менторам, в общем всесторонне улучшаюсь. Все эти годы я работаю в команде и имею дело с чужим кодом. У меня нет проблем в общении, я люблю активный образ жизни, спорт и путешествия." />
      </article>
    </div>
  );
};
