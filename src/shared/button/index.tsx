import { FC } from 'react';
import style from './style.module.css';

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className={`${style.wrapper}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
