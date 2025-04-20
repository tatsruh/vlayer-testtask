'use client';
import React, { useState } from 'react';

import style from './Header.module.scss';
import { LogoWithName } from '../../ui/logo/LogoWithName';
import { Navigation } from '../../ui/navigation/Navigation';
import { NavigationItemProps } from '../../ui/navigation/NavigationItem';
import { Button } from '../../ui/button/Button';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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
        <LogoWithName />

        <nav className={style.desktop_nav}>
          <Navigation navigationItems={navigation} />
        </nav>

        <div
          className={`${style.burger} ${menuOpen ? style.open : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </div>

        <div className={style.desktop_buttons}>
          <Button title="Log In" variant="secondary" />
          <Button title="Sign Up" variant="primary" />
        </div>
      </header>

      {menuOpen && (
        <div className={style.mobile_menu}>
          <Navigation navigationItems={navigation} />
          <div className={style.mobile_buttons}>
            <Button title="Log In" variant="secondary" />
            <Button title="Sign Up" variant="primary" />
          </div>
        </div>
      )}
    </div>
  );
};
