'use client';
import React from 'react';

import style from './Header.module.scss';
import { Logo } from '../../ui/logo/Logo';

export const LogoWithName = () => {
  return (
    <div className={style.logo_with_name_container}>
      <Logo></Logo>
      <span>Estatery</span>
    </div>
  );
};
