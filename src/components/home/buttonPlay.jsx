import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoPlayStyled from '../../styles/home/botaoPlay';
import GameContext from '../../context/gameContext';
import {useLocation} from 'react-router-dom';
import { BsFillCaretRightFill } from 'react-icons/bs';

export default function ButtonPlay() {
  const {pathname} = useLocation();
  const { randomElement, setPlayer } = useContext(GameContext);
  const pages = useNavigate();

  const goPages = async () => {
    await randomElement();
    setPlayer('');
    if (pathname.includes('/ranking')) {
      pages('/home');
    } else {
      pages('/jogo');
    }
  };

  const goGame = () => {
    return (
      <BotaoPlayStyled>
        <a onClick={goPages} className="play">JOGAR<BsFillCaretRightFill size="1.8rem" color="red"/></a>
      </BotaoPlayStyled>
    );
  };

  return goGame();
}