import React from 'react';
import Menu from '../components/menu/Menu';
import Descricao from '../components/home/descricao';
import BotaoPlay from '../components/home/botaoPlay';

export default function Home() {
  return (
    <>
      <Menu />
      <Descricao />
      <BotaoPlay />
    </>
  );
}