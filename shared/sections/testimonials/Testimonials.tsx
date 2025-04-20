'use client';
import React, { useState } from 'react';
import style from './Testimonials.module.scss';

import { TestimonialProps } from '@/features/types/types';
import avatar1 from '../../../public/avatars/avatar1.png';
import avatar2 from '../../../public/avatars/avatar2.png';
import avatar3 from '../../../public/avatars/avatar3.png';

import { Avatar } from '../../ui/avatars/Avatar';
import { Testimonial } from '../../ui/testimonial/Testimonial';

const testimonialsData: TestimonialProps[] = [
  {
    imageSrc: avatar1,
    text: '“Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!”',
    name: 'Mira Culos',
    title: 'Renter',
    id: 1,
  },
  {
    imageSrc: avatar2,
    text: "“Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.”",
    name: 'Jake White',
    title: 'Renter',
    id: 2,
  },
  {
    imageSrc: avatar3,
    text: "“I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.”",
    name: 'Mark Brown',
    title: 'Renter',
    id: 3,
  },
];

export const Testimonials = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const activeTestimonial = testimonialsData.find((el) => el.id === activeId)!;

  return (
    <div className={style.testimonials_background}>
      <section className={style.testimonials_container}>
        <h2>Testimonials</h2>
        <p className={style.testimonials_description}>
          See what our property managers, landlords, and tenants have to say
        </p>

        <Testimonial
          name={activeTestimonial.name}
          text={activeTestimonial.text}
          title={activeTestimonial.title}
        />

        <div className={style.avatars_container}>
          {testimonialsData.map(({ id, imageSrc }) => (
            <button
              key={id}
              onClick={() => setActiveId(id)}
              className={style.avatarButton}
              aria-label={`Show testimonial from user ${id}`}
            >
              <Avatar src={imageSrc} id={id} isActive={id === activeId} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
