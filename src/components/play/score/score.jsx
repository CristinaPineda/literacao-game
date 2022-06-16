import React, { useContext } from 'react';
import GameContext from '../../../context/gameContext';
import ScoreStyled from '../../../styles/jogo/jogador/scoreTotal';

export default function Score() {
  const { score } = useContext(GameContext);

  return (
    <ScoreStyled>
      <h1 className="score">{score}</h1>
      <span>Pontuação total</span>
    </ScoreStyled>
  );
}