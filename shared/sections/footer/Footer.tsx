'use client';
import React from 'react';

import style from './Footer.module.scss';
import { LogoWithName } from '../../ui/logo/LogoWithName';
import { SocialMediaIcon } from '../../ui/socialMediaIcon/socialMediaIcon';

export const Footer = () => {
  return (
    <footer className={style.footer_container}>
      <div className={style.footer_menu_wrapper}>
        <div className={style.footer_menu_container}>
          <LogoWithName></LogoWithName>
          <ul>
            <li className={style.menu_item}>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">faq</a>
            </li>
            <li>
              <a href="#">TERMS & PRIVACY</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.footer_contact_container}>
        <span>©2021 Estatery. All rights reserved</span>
        <ul>
          <li>
            <a href="">
              <SocialMediaIcon href={'facebook'}></SocialMediaIcon>
            </a>
          </li>
          <li>
            <a href="">
              <SocialMediaIcon href={'instagram'}></SocialMediaIcon>
            </a>
          </li>

          <li>
            <a href="">
              <SocialMediaIcon href={'twitter'}></SocialMediaIcon>
            </a>
          </li>

          <li>
            <a href="">
              <SocialMediaIcon href={'linkedin'}></SocialMediaIcon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
