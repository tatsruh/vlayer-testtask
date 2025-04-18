'use client';
import React from 'react';

import style from './Card.module.scss';
type CardCategoryProps = {
  category: string;
};
export const CardCategory = ({ category }: CardCategoryProps) => {
  return (
    <div className={style.card_category_container}>
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="white">
        <use
          xlinkHref="/sprite/sprite-icons.svg#stars"
          transform="translate(4 4)"
        />
      </svg>
      <span>{category}</span>
    </div>
  );
};
