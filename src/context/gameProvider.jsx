import React, { useState } from 'react';

import PropTypes from 'prop-types';
import GameContext from './gameContext';
import data from '../assets/data/data.json';

function GameProvider({children}) {
  const [question, setQuestion] = useState();

  const randomElement = () => {
    const equipes = [];
    while (equipes.length < 5 ){
      const rand = data[Math.floor(Math.random() * data.length)];
      equipes.push(rand);
    }
    setQuestion(equipes);
  };

  const context = {
    question,
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