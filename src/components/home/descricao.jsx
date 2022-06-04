import React from 'react';
import { Descreve, Regras} from '../../functions';

export default function Descricao() {
  return (
    <>
      <div className="decricao_div">
        <h1 className="decricao_jogo">O Jogo</h1>
        <p className="decricao">
          {Descreve()}
        </p>
      </div>
      <div className="regras_div">
        <h1 className="regras_jogo">Regras do jogo</h1>
        <p className="regras">
          {Regras()}
        </p>
      </div>
    </>
  );
}