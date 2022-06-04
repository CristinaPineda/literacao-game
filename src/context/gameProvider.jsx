import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GameContext from './gameContext';
import data from '../assets/data/data.json';

function GameProvider({children}) {
  const [question, setQuestion] = useState();
  const [player, setPlayer] = useState('');
  const [score, setScore] = useState(0);
  const [ok, setOk] = useState('');
  const [listRank, setListRank] = useState();

  const randomElement = () => {
    const answers = [];
    let rand;
    while (answers.length <= 5 ){
      do {
        rand = data[Math.floor(Math.random() * data.length)];
      } while (answers.indexOf(rand) >= 0);
      answers.push(rand);
    }
    setQuestion(answers);
  };

  const storage = async() => {
    const ol = [];
    let list = JSON.parse(localStorage.getItem('ranking'));
    ol.push(list);
    setListRank(ol[0]);
  };

  const context = {
    question,
    player,
    setPlayer,
    score,
    setScore,
    ok,
    setOk,
    listRank,
    setListRank,
    storage,
    randomElement,
  };


  return (
    <GameContext.Provider value={ context }>
      { children }
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default GameProvider;