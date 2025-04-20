'use client';
import React from 'react';
import { Tabs } from '../../ui/tab/Tabs';
import PalmHarbor from '../../../public/buildings/building1.png';
import StCrystal from '../../../public/buildings/building6.png';
import FaulknerAve from '../../../public/buildings/building4.png';
import { PropertyProps } from '@/features/types/types';
import Tarpon from '../../../public/buildings/building3.png';
import CoveRed from '../../../public/buildings/building5.png';
import Springfield from '../../../public/buildings/building2.png';
import { FilteredBuildings } from './FilteredBuildings';
import style from './Buildings.module.scss';

export const Buildings = () => {
  const houseData: PropertyProps[] = [
    {
      title: 'Palm Harbor',
      price: '3,440',
      address: '2699 Green Valley, Highland Lake, FL',
      imageSrc: PalmHarbor,
      withCategory: true,
      category: 'House',
      id: 1,
    },
    {
      title: 'St. Crystal',
      price: '6,550',
      address: '210 US Highway, Highland Lake, FL',
      imageSrc: StCrystal,
      withCategory: true,
      category: 'House',
      id: 2,
    },
    {
      title: 'Faulkner Ave',
      price: '4,950',
      address: '909 Woodland St, Michigan, IN',
      imageSrc: FaulknerAve,
      withCategory: true,
      category: 'House',
      id: 3,
    },
  ];
  const apartmentData: PropertyProps[] = [
    {
      title: 'Tarpon Bay',
      price: '2,140',
      address: '103 Lake Shores, Michigan, IN',
      imageSrc: Tarpon,
      withCategory: true,
      category: 'Apartments',
      id: 4,
    },
    {
      title: 'Cove Red',
      price: '1,450',
      address: '243 Curlew Road, Palm Harbor, TX',
      imageSrc: CoveRed,
      withCategory: true,
      category: 'Apartments',
      id: 5,
    },
    {
      title: 'Beverly Springfield',
      price: '3,850',
      address: '2821 Lake Sevilla, Palm Harbor, TX',
      imageSrc: Springfield,
      withCategory: true,
      category: 'Apartments',
      id: 6,
    },
  ];

  const tabs = [
    {
      label: 'Houses',
      content: <FilteredBuildings data={houseData}></FilteredBuildings>,
    },
    {
      label: 'Apartments',
      content: <FilteredBuildings data={apartmentData}></FilteredBuildings>,
    },
  ];

  return (
    <section className={style.tabs_container}>
      <Tabs tabs={tabs} />
    </section>
  );
};
