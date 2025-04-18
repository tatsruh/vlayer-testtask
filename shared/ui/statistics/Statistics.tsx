'use client';
import React from 'react';

import style from './Statistics.module.scss';
type StatisticsProps = {
  amount: string;
  content: string;
};
export const Statistics = ({ amount, content }: StatisticsProps) => {
  return (
    <div className={style.statistics_container}>
      <h3>{amount}</h3>
      <span>{content}</span>
    </div>
  );
};
