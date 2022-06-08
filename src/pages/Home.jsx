import React from 'react';
import Menu from '../components/menu/menu';
import Description from '../components/home/description';
import ButtonPlay from '../components/home/buttonPlay';

export default function Home() {
  return (
    <>
      <Menu />
      <Description />
      <ButtonPlay className="btn" />
    </>
  );
}