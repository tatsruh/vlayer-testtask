'use client';
import React from 'react';

import style from './Logo.module.scss';
import { Logo } from './Logo';

export const LogoWithName = () => {
  return (
    <div className={style.logo_with_name_container}>
      <Logo></Logo>
      <span>Estatery</span>
    </div>
  );
};
