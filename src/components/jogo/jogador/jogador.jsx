import React, { useState } from 'react';
import DivListStyled from '../../../styles/jogo/equipes/listaEquipes';

export default function Jogador() {
  const [name, setName] = useState();
  const [input, setInput] = useState('');
  const [resp, setResp] = useState(false);

  const handleChangeInput = (event) => {
    const inputs = event.target.value;
    setName(inputs);
  };

  const disabledInput = () => {
    setResp(true);
    setInput('');
    console.log(input);
  };

  return (
    <DivListStyled>
      <div className="containerList">
        <div className="equipes">
          <h3>Jogador: { name }</h3>
          <input disabled={resp} type="text" placeholder="Digite seu nome aqui:" onChange={handleChangeInput} value={name}/>
          <button onClick={disabledInput}>Ok</button>
        </div>
      </div>
    </DivListStyled>
  );
}