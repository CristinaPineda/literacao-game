import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoPlayStyled from '../../styles/home/botaoPlay';
import GameContext from '../../context/gameContext';
import { BsFillCaretRightFill } from 'react-icons/bs';

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
        <a onClick={goPages} className="play">Jogar<BsFillCaretRightFill size="1.8rem" color="red"/></a>
      </BotaoPlayStyled>
    );
  };

  return goGame();
}