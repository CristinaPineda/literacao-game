import React, { useState } from 'react';

import PropTypes from 'prop-types';
import GameContext from './gameContext';
import data from '../assets/data/data.json';

function GameProvider({children}) {
  const [question, setQuestion] = useState();

  const randomElement = () => {
    const initial = data[Math.floor(Math.random() * data.length)];
    const initial2 = data[Math.floor(Math.random() * data.length)];
    setQuestion([initial, initial2]);
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