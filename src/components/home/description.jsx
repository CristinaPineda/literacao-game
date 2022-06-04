import React from 'react';
import {Descript, Rules} from '../../functions';

export default function Description() {
  return (
    <>
      <div className="divDescription">
        <h1 className="descriptionGame">O Jogo</h1>
        <p className="description">
          {Descript()}
        </p>
      </div>
      <div className="divRules">
        <h1 className="gameRules">Regras do jogo</h1>
        <p className="rules">
          {Rules()}
        </p>
      </div>
    </>
  );
}