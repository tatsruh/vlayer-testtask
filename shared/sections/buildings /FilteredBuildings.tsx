'use client';
import React from 'react';

import style from './Buildings.module.scss';
import { PropertyProps } from '@/features/types/types';
import { Card } from '../../ui/card/Card';
import useEmblaCarousel from 'embla-carousel-react';

type FilteredBuildingsProps = {
  data: PropertyProps[];
};

export const FilteredBuildings = ({ data }: FilteredBuildingsProps) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={style.content_container}>
      <h2>We make it easy for houses and apartments.</h2>
      <p className={style.description}>
        Whether it’s selling your current home, getting financing, or buying a
        new home, we make it easy and efficient. The best part? you’ll save a
        bunch of money and time with our services.
      </p>
      <div
        className={`${style.card_container} ${style.embla} embla`}
        ref={emblaRef}
      >
        <div className={`${style.embla__container} embla__container`}>
          {data.map((item: PropertyProps) => (
            <div key={item.id} className={`${style.embla__slide} embla__slide`}>
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
    </div>
  );
};
