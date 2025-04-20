'use client';
import React from 'react';
import Image from 'next/image';

import style from './Card.module.scss';
import { IconButton } from '../icon/IconButton';
import { CardCategory } from './CardCategory';
import { PropertyProps } from '@/features/propertiesSlice';

export type CardProps = Omit<PropertyProps, 'id'> & {
  version?: 'primary' | 'secondary';
};
export const Card: React.FC<CardProps> = ({
  imageSrc,
  address,
  price,
  title,
  category = 'House',
  withCategory = false,
  version = 'primary',
}: CardProps) => {
  return (
    <div
      className={`${style.card_container} ${version === 'secondary' ? style.card_container_secondary : ''}`}
    >
      <Image src={imageSrc} alt="Card image" width={340} height={200} />
      <div className={style.description_container}>
        <div className={style.title_container}>
          <div>
            <div>
              <span className={style.span_price}>{`$${price}`}</span>
              <span className={style.span_basics}>/month</span>
            </div>
            <h4>{title}</h4>
          </div>
          <IconButton></IconButton>
        </div>
        <p className={style.description}>{address}</p>
      </div>
      {withCategory && <CardCategory category={category}></CardCategory>}
    </div>
  );
};
