'use client';
import React from 'react';

import style from './Main.module.scss';
import { Card } from '../../ui/card/Card';
import image from '../../../public/buildings/building2.png';
import { Statistics } from '../../ui/statistics/Statistics';

export const Main = () => {
  return (
    <div className={style.background_container}>
      <main className={style.main_container}>
        <div>
          <h1>Buy, rent, or sell your property easily</h1>
          <p>
            A great platform to buy, sell, or even rent your properties without
            any commisions.
          </p>
          <div className={style.statistics_container}>
            <Statistics amount={'50k+'} content={'renters'}></Statistics>
            <Statistics amount={'10k+'} content={'properties'}></Statistics>
          </div>
        </div>
        <Card
          title={'Beverly Springfield'}
          address={'2821 Lake Sevilla, Palm Harbor'}
          price={'2,700'}
          withCategory={false}
          imageSrc={image.src}
        ></Card>
      </main>
    </div>
  );
};
