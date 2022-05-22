import React, { useState }from 'react';
import data from '../../../assets/data/data.json';

export default function Jogos() {
  const [dados, setDados] = useState(data);
  const [index, setIndex] = useState(0);

  const handleClick = async() => {
    setDados(data);
    console.log(dados[1]);
  };

  const handleClickDicas = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Jogar</button>
      <p className="dicas">{dados[0].dicas[index]}</p>
      <button onClick={handleClickDicas} className="maisDicas">+</button>
    </>
  );
}