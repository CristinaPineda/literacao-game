import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoPlayStyled from '../../styles/home/botaoPlay';
import GameContext from '../../context/gameContext';

export default function ButtonRanking() {
  const { storage } = useContext(GameContext);
  const pages = useNavigate();

  const goPages = async () => {
    await storage();
    pages('/ranking');
  };

  const goRank = () => {
    return (
      <BotaoPlayStyled>
        <button onClick={goPages}>Ranking</button>
      </BotaoPlayStyled>
    );
  };

  return goRank();
}