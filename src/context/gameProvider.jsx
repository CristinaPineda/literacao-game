import React, { useState } from 'react';

import PropTypes from 'prop-types';
import GameContext from './gameContext';
import data from '../assets/data/data.json';

function GameProvider({children}) {
  const [question, setQuestion] = useState({});
  const [pontos, setPontos] = useState(100);

  const randomElement = () => {
    const initial = data[Math.floor(Math.random() * data.length)];
    setQuestion(initial);
  };

  const context = {
    question,
    randomElement,
    pontos,
    setPontos,
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