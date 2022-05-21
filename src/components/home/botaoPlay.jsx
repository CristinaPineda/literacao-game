import React from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoPlayStyled from '../../styles/home/botaoPlay';

export default function BotaoPlay() {

  const pages = useNavigate();
  
  const goGame = () => {
    const goPages = () => pages('/jogo');
    return (
      <BotaoPlayStyled>
        <button onClick={goPages} className="play">Jogar</button>
      </BotaoPlayStyled>
    );
  };

  return goGame();
}