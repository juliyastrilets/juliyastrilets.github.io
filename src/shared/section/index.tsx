import styles from './style.module.scss';

interface SectionProps
  extends React.ButtonHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  short?: boolean;
  gradient?: boolean;
}

export const Section = ({
  children,
  short,
  gradient,
  ...extendProps
}: SectionProps) => {
  const sectionClass = () => {
    return `${styles.section} ${gradient ? styles.gradient : ''}`;
  };
  const contentClass = () => {
    return `${short ? styles.short : ''}`;
  };
  return (
    <section className={sectionClass()} {...extendProps}>
      <div className={contentClass()}>{children}</div>
    </section>
  );
};
