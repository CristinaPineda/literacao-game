import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoPlayStyled from '../../styles/home/botaoPlay';
import GameContext from '../../context/gameContext';
import { AiFillTrophy } from 'react-icons/ai';

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
        <a onClick={goPages}><AiFillTrophy size="1.8rem"/>Ranking</a>
      </BotaoPlayStyled>
    );
  };

  return goRank();
}