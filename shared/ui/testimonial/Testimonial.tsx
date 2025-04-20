'use client';
import React from 'react';

import style from './Testimonial.module.scss';

type TestimonialProps = {
  text: string;
  name: string;
  title: string;
  id?: number;
};

export const Testimonial = ({ text, name, title }: TestimonialProps) => {
  return (
    <div className={style.testimonial_container}>
      <p className={style.testimonial_text}>{text}</p>
      <div>
        <span className={style.testimonial_name}>{`${name}, `}</span>
        <span className={style.testimonial_profession}>{title}</span>
      </div>
    </div>
  );
};
