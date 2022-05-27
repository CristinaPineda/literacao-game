import React from 'react';
import RenderEquipe from './renderEquipe';
// import Pontos from '../pontos/pontos';
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
          {/* <Pontos /> */}
        </div>
        <Jogos />
      </div>
      <div className="containerList">
        <div className="equipes">
          <h2>Equipe 2</h2>
          <RenderEquipe />
        </div>
        <div className="pontosEquipe2">
          {/* <Pontos /> */}
        </div>
        <Jogos />
      </div>
    </DivListStyled>
  );
}