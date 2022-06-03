import React, { useState, useContext } from 'react';
import GameContext from '../../../context/gameContext';
import DivListStyled from '../../../styles/jogo/equipes/listaEquipes';

export default function Jogador() {
  const {player, setPlayer} = useContext(GameContext);
  const [input, setInput] = useState('');
  const [resp, setResp] = useState(false);
  const [btn, setBtn] = useState(false);

  const handleChangeInput = (event) => {
    const inputs = event.target.value;
    setPlayer(inputs);
  };

  const disabledInput = () => {
    setResp(true);
    setInput('');
    setBtn(true);
    console.log(input);
  };

  const renderForm = () => {
    return (
      <>
        <input disabled={resp} type="text" placeholder="Digite seu nome aqui:" onChange={handleChangeInput} value={player}/>
        <button disabled={btn} onClick={disabledInput}>Ok</button>
      </>
    );
  };

  return (
    <DivListStyled>
      <div className="containerList">
        <div className="equipes">
          <h3>Jogador: { player }</h3>
          {btn? '' : renderForm()}
        </div>
      </div>
    </DivListStyled>
  );
}