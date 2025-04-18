'use client';
import React from 'react';

import style from '../navigation/Navigation.module.scss';
import { NavigationItem, NavigationItemProps } from './NavigationItem';

type NavigationProps = {
  navigationItems: NavigationItemProps[];
};

export const Navigation: React.FC<NavigationProps> = ({ navigationItems }) => {
  return (
    <ul className={style.navigation}>
      {navigationItems.map((item) => (
        <li key={item.title}>
          <NavigationItem title={item.title} url={item.url} />
        </li>
      ))}
    </ul>
  );
};
