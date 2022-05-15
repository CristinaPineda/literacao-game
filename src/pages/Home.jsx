import React from 'react';
import Menu from '../components/menu/Menu';
import Descricao from '../components/home/descricao';
import Botao_play from '../components/home/botao_play';

export default function Home() {
  return (
    <>
      <Menu />
      <Descricao />
      <Botao_play />
    </>
  );
}