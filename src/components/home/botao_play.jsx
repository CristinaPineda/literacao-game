import React from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoPlayStyled from '../../styles/home/botao_play';

export default function Botao_play() {

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