import { Button as RadixButton } from '@radix-ui/themes';
import type { ReactNode } from 'react';
import './Button.scss';

type ButtonProps = {
  children: ReactNode;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  onClick?: () => void;
  variant?: 'classic' | 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';
  color?: 'gray' | 'gold' | 'bronze' | 'brown' | 'yellow' | 'amber' | 'orange' | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'lime' | 'mint' | 'sky';
};

export const Button = ({ children, iconBefore, iconAfter, ...props }: ButtonProps) => {
  return (
    <RadixButton {...props} className="button">
      {iconBefore && <span className="button__icon-before">{iconBefore}</span>}
      {children}
      {iconAfter && <span className="button__icon-after">{iconAfter}</span>}
    </RadixButton>
  );
};
