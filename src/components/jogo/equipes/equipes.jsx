import React from 'react';
import RenderEquipe from './renderEquipe';
import DivListStyled from '../../../styles/jogo/equipes/listaEquipes';

export default function Equipes() {
  return (
    <DivListStyled>
      <div className="equipes">
        <h2>Equipe1</h2>
        <RenderEquipe />
      </div>
      <div className="equipes">
        <h2>Equipe 2</h2>
        <RenderEquipe />
      </div>
    </DivListStyled>
  );
}