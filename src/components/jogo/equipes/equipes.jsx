import React from 'react';
import RenderEquipe from './renderEquipe';

export default function Equipes() {
  return (
    <>
      <div className="equipes">
        <h2 className="equipe1">Equipe 1</h2>
        <RenderEquipe />
      </div>
      <div className="equipes">
        <h2 className="equipe2">Equipe 2</h2>
        <RenderEquipe />
      </div>
    </>
  );
}