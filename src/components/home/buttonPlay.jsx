import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoPlayStyled from '../../styles/home/botaoPlay';
import GameContext from '../../context/gameContext';

export default function ButtonPlay() {
  const { randomElement, setPlayer } = useContext(GameContext);
  const pages = useNavigate();

  const goPages = async () => {
    await randomElement();
    setPlayer('');
    pages('/jogo');
  };

  const goGame = () => {
    return (
      <BotaoPlayStyled>
        <button onClick={goPages} className="play">Jogar</button>
      </BotaoPlayStyled>
    );
  };

  return goGame();
}