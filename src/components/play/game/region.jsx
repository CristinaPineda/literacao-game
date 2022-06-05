import React, {useContext} from 'react';
import GameContext from '../../../context/gameContext';
import PropTypes from 'prop-types';

export default function Region(props) {
  const {question} = useContext(GameContext);

  return(
    <>
      <p>Região da pergunta {question[props.questionEquipe].regiao}</p>
    </>
  );
}

Region.propTypes = {
  questionEquipe: PropTypes.number,
};
