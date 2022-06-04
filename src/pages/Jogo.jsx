import React from 'react';
import Menu from '../components/menu/menu';
import Player from '../components/play/player/player';
import Game from '../components/play/game/game';

export default function Home() {
  return (
    <>
      <Menu />
      <Player />
      <Game />
    </>
  );
}