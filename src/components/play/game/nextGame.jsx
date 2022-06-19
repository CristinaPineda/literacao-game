import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../../../context/gameContext';
import DivNextGameStyled from '../../../styles/jogo/jogos/nextGame';

export default function NextGame() {
  const {setOk, player, score, setScore} = useContext(GameContext);
  const pages = useNavigate();

  const goHome = async() => {
    pages('/home');
    setOk('');
    await rank();
    setScore(0);
  };

  const rank = () => {
    let person = localStorage['ranking'] ? JSON.parse(localStorage['ranking']) : [];
    person.push({player: player, score: score});
    localStorage.setItem('ranking', JSON.stringify(person));
  };

  const Game = () => {
    return (
      <DivNextGameStyled>
        <button onClick={goHome} className="btnNextGame">JOGAR NOVAMENTE</button>
      </DivNextGameStyled>
    );
  };

  return Game();
}