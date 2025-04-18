'use client';
import React from 'react';

import style from './Logo.module.scss';
type LogoProps = {
  variant?: 'primary' | 'secondary';
};
export const Logo = ({ variant = 'primary' }: LogoProps) => {
  return (
    <div className={`${style[variant]}`}>
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <use xlinkHref="/sprite/sprite-icons.svg#house" />
      </svg>
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <use xlinkHref="/sprite/sprite-icons.svg#logo-bottom-element" />
      </svg>
    </div>
  );
};
