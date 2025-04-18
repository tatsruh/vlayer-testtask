'use client';
import React from 'react';

import style from '../navigation/Navigation.module.scss';

export type NavigationItemProps = {
  url: string;
  title: string;
};
export const NavigationItem = ({ url, title }: NavigationItemProps) => {
  return (
    <a href={url} className={style.navigation_item}>
      {title}
    </a>
  );
};
