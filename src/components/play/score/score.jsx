import React, { useContext } from 'react';
import GameContext from '../../../context/gameContext';

export default function Score() {
  const { score } = useContext(GameContext);

  return (
    <h1 className="score">{score}</h1>
  );
}