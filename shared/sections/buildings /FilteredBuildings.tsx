'use client';
import React from 'react';

import style from './Buildings.module.scss';
import { PropertyProps } from '@/features/types/types';
import { Card } from '../../ui/card/Card';

type FilteredBuildingsProps = {
  data: PropertyProps[];
};

export const FilteredBuildings = ({ data }: FilteredBuildingsProps) => {
  return (
    <div className={style.content_container}>
      <h2>We make it easy for houses and apartments.</h2>
      <p className={style.description}>
        Whether it’s selling your current home, getting financing, or buying a
        new home, we make it easy and efficient. The best part? you’ll save a
        bunch of money and time with our services.
      </p>
      <div className={style.card_container}>
        {data.map((item: PropertyProps) => (
          <div key={item.id}>
            <Card
              title={item.title}
              imageSrc={item.imageSrc}
              price={item.price}
              address={item.address}
              withCategory={true}
              category={item.category}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
};
