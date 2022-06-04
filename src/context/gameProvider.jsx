import React, { useState } from 'react';

import PropTypes from 'prop-types';
import GameContext from './gameContext';
import data from '../assets/data/data.json';

function GameProvider({children}) {
  const [question, setQuestion] = useState();
  const [player, setPlayer] = useState(null);
  const [score, setScore] = useState(0);
  const [ok, setOk] = useState('');

  const randomElement = () => {
    const answers = [];
    while (answers.length < 5 ){
      const rand = data[Math.floor(Math.random() * data.length)];
      answers.push(rand);
    }
    setQuestion(answers);
  };

  const context = {
    question,
    player,
    setPlayer,
    score,
    setScore,
    ok,
    setOk,
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