'use client';
import React from 'react';

import style from './Header.module.scss';
import { LogoWithName } from './LogoWithName';
import { Navigation } from '../../ui/navigation/Navigation';
import { NavigationItemProps } from '../../ui/navigation/NavigationItem';
import { Button } from '../../ui/button/Button';

export const Header = () => {
  const navigation: NavigationItemProps[] = [
    { title: 'Rent', url: '/' },
    { title: 'Buy', url: '/' },
    { title: 'Sell', url: '/' },
    { title: 'Manage Property', url: '/' },
    { title: 'Resources', url: '/' },
  ];
  return (
    <div className={style.header_border}>
      <header className={style.header_container}>
        <LogoWithName></LogoWithName>
        <Navigation navigationItems={navigation}></Navigation>
        <div>
          <Button title={'Log In'} variant={'secondary'}></Button>
          <Button title={'Sign Up'} variant={'primary'}></Button>
        </div>
      </header>
    </div>
  );
};
