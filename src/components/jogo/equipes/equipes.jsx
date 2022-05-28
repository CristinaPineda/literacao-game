import React from 'react';
import RenderEquipe from './renderEquipe';
import DivListStyled from '../../../styles/jogo/equipes/listaEquipes';
import Jogos from '../../../components/jogo/jogos/jogos';

export default function Equipes() {
  return (
    <DivListStyled>
      <div className="containerList">
        <div className="equipes">
          <h2>Equipe1</h2>
          <RenderEquipe />
        </div>
        <div className="pontosEquipe1">
        </div>
        <Jogos />
      </div>
      <div className="containerList">
        <div className="equipes">
          <h2>Equipe 2</h2>
          <RenderEquipe />
        </div>
        <div className="pontosEquipe2">
        </div>
        <Jogos />
      </div>
    </DivListStyled>
  );
}