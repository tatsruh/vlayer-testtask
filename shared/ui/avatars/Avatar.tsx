'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './Avatar.module.scss';

type AvatarProps = {
  id?: number;
  src: StaticImageData;
  isActive?: boolean; // optional
};

export const Avatar = ({ src, id, isActive }: AvatarProps) => {
  return (
    <div className={`${style.avatar} ${isActive ? style.isActive : ''}`}>
      {isActive && <span className={style.svgOverlay} />}
      <Image
        src={src}
        alt={`User ${id} avatar`}
        width={60}
        height={60}
        className={style.avatarImage}
      />
    </div>
  );
};
