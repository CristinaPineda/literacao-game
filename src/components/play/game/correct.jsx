import React, {useContext} from 'react';
import GameContext from '../../../context/gameContext';
import PropTypes from 'prop-types';
import DivCorrectStyled from '../../../styles/jogo/jogos/correct';
import {BiLike, BiDislike} from 'react-icons/bi';

export default function Correct(props) {
  const {ok} = useContext(GameContext);

  const verifyCorrect = () => {
    if (ok == 'true') {
      return (
        <DivCorrectStyled>
          <p>CORRETO!!</p>
          <BiLike size="1.6rem" color="lime"/>
          <p className="spamResp">Resposta: {props.responseQuestion}</p>
        </DivCorrectStyled>
      );
    } else if(ok == 'false') {
      return (
        <DivCorrectStyled>
          <p>ERRADO!!</p>
          <BiDislike size="1.6rem" color="red"/>
          <p className="spamResp">Resposta correta: {props.responseQuestion}</p>
        </DivCorrectStyled>
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
