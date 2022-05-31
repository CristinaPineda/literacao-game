import React, { useState } from 'react';

import PropTypes from 'prop-types';
import GameContext from './gameContext';
import data from '../assets/data/data.json';

function GameProvider({children}) {
  const [question, setQuestion] = useState();
  const [equipe1, setEquipe1] = useState();
  const [equipe2, setEquipe2] = useState();


  const divideEquipes = () => {
    const one = question.slice(0, 3);
    const two = question.slice(3);
    setEquipe1(one);
    setEquipe2(two);
  };

  const randomElement = async () => {
    let i = 0;
    const equipes = [];
    while (i < 6 ){
      const rand = data[Math.floor(Math.random() * data.length)];
      equipes.push(rand);
      i++;
    }
    await setQuestion(equipes);
    const one = equipes.slice(0, 3);
    const two = equipes.slice(3);
    setEquipe1(one);
    setEquipe2(two);
  };

  const context = {
    question,
    equipe1,
    equipe2,
    randomElement,
    divideEquipes,
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