'use client';
import React, { useEffect, useRef } from 'react';

import style from './Main.module.scss';
import { Card } from '../../ui/card/Card';
import image from '../../../public/buildings/building2.png';
import { Statistics } from '../../ui/statistics/Statistics';
import { splitText } from 'motion-plus';
import { animate, stagger } from 'framer-motion';

const TitleText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = 'visible';

      const { words } = splitText(containerRef.current.querySelector('h1')!);

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef}>
      <h1>Buy, rent, or sell your property easily</h1>
    </div>
  );
};

export const Main = () => {
  return (
    <div className={style.background_container}>
      <main className={style.main_container}>
        <div>
          <TitleText />
          <p className={style.description}>
            A great platform to buy, sell, or even rent your properties without
            any commisions.
          </p>
          <div className={style.statistics_container}>
            <Statistics amount={'50k+'} content={'renters'}></Statistics>
            <Statistics amount={'10k+'} content={'properties'}></Statistics>
          </div>
        </div>
      </main>
      <div className={style.card}>
        <Card
          title={'Beverly Springfield'}
          address={'2821 Lake Sevilla, Palm Harbor'}
          price={'2,700'}
          withCategory={false}
          imageSrc={image}
          version={'secondary'}
        ></Card>
      </div>
    </div>
  );
};
