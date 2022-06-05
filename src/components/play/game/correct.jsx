import React, {useContext} from 'react';
import GameContext from '../../../context/gameContext';
import PropTypes from 'prop-types';

export default function Correct(props) {
  const {ok} = useContext(GameContext);

  const verifyCorrect = () => {
    if (ok == 'true') {
      return (
        <>
          <p className="spamCorrect">CORRETO!!</p>
          <p>Resposta: {props.responseQuestion}</p>
        </>
      );
    } else if(ok == 'false') {
      return (
        <>
          <p className="spanWrong">ERRADO!!</p>
          <p>Resposta correta: {props.responseQuestion}</p>
        </>
      );
    } else if(ok == '') {
      return (
        <>
        </>
      );
    }
  };

  return verifyCorrect();
}

Correct.propTypes = {
  responseQuestion: PropTypes.string
};
