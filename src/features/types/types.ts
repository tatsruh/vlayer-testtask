import { StaticImageData } from 'next/image';

export type PropertyProps = {
  imageSrc: StaticImageData;
  title: string;
  price: string;
  address: string;
  category?: 'House' | 'Apartments';
  withCategory?: boolean;
  id: number;
};
export type TestimonialProps = {
  imageSrc: StaticImageData;
  text: string;
  id: number;
  name: string;
  title: string;
};
