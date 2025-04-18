'use client';
import React from 'react';

import style from './Button.module.scss';

type ButtonTypes = 'primary' | 'secondary';

type ButtonProps = {
  title: string;
  variant?: ButtonTypes;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  title,
  disabled,
  variant = 'primary',
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${style[variant]}`}
      disabled={disabled}
      type="button"
      {...props}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
