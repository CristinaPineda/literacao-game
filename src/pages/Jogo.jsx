import React from 'react';
import Menu from '../components/menu/Menu';
import Equipes from '../components/jogo/equipes/equipes';
import Jogos from '../components/jogo/jogos/jogos';

export default function Home() {
  return (
    <>
      <Menu />
      <Equipes />
      <Jogos />
    </>
  );
}