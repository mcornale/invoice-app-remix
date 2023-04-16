import type { FormHTMLAttributes, ReactNode } from 'react';
import type { LinksFunction } from '@remix-run/node';
import styles from './styles.css';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={`form ${className ?? ''}`} {...props}>
      {children}
    </form>
  );
}
