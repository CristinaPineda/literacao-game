import React, { useState } from 'react';

export default function Pontos() {
  const [pontos] = useState(100);

  return (
    <div className="divPontos">
      <p>Pontos:</p>
      <p className="pontuacao">{pontos}</p>
    </div>
  );
}