import React, { useState, useContext } from 'react';
import GameContext from '../../../context/gameContext';
import DivStyled from '../../../styles/jogo/equipes/listaEquipes';
import Score from '../score/score';

export default function Player() {
  const {player, setPlayer} = useContext(GameContext);
  const [input, setInput] = useState('');
  const [inputOn, setInputOn] = useState(false);
  const [btn, setBtn] = useState(false);

  const handleChangeInput = (event) => {
    const text = event.target.value;
    setPlayer(text);
  };

  const disabledInput = () => {
    setInputOn(true);
    setInput('');
    setBtn(true);
    console.log(input);
  };

  const renderForm = () => {
    return (
      <>
        <input disabled={inputOn} type="text" placeholder="Digite seu nome aqui:" onChange={handleChangeInput}/>
        <button disabled={btn} onClick={disabledInput}>Ok</button>
      </>
    );
  };

  const Player = () => {
    return (
      <DivStyled>
        <div className="container">
          <div className="player">
            <p className="pNome">Antes de iniciar o jogo, digite seu nome para aparecer no ranking!</p>
            <h3>Nome: { player }</h3>
            {btn? '' : renderForm()}
          </div>
        </div>
        <Score />
      </DivStyled>
    );
  };

  return Player();
}