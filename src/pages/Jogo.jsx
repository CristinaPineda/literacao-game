import React from 'react';
import Menu from '../components/menu/Menu';
import Jogador from '../components/jogo/jogador/jogador';
import Jogos from '../components/jogo/jogos/jogos';

export default function Home() {
  return (
    <>
      <Menu />
      <Jogador />
      <Jogos />
    </>
  );
}