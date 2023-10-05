import Image from 'next/image';
import styles from './style.module.scss';
import { ContactList } from './model';

export const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      {ContactList.map((contact) => (
        <a
          key={contact.id}
          className={styles.contact}
          href={contact.href}
          target="_blank"
        >
          <Image
            className={styles.icon}
            src={contact.image}
            width={48}
            height={48}
            alt={`contact logo`}
          />
        </a>
      ))}
    </div>
  );
};
