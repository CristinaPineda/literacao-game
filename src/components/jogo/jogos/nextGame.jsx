import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../../../context/gameContext';

export default function NextGame() {
  const {setOk} = useContext(GameContext);
  const pages = useNavigate();

  const goHome = () => {
    pages('/home');
    setOk('');
  };

  const Game = () => {
    return (
      <button onClick={goHome} className="btnNextGame">Jogar novamente</button>
    );
  };

  return Game();
}