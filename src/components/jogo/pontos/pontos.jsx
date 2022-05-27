import React, { useContext } from 'react';
import GameContext from '../../../context/gameContext';

export default function Pontos() {
  const { pontos } = useContext(GameContext);

  return (
    <div className="divPontos">
      <p>Pontos:</p>
      <p className="pontuacao">{pontos}</p>
    </div>
  );
}