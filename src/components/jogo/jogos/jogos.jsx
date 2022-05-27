import React, { useContext, useEffect, useState }from 'react';
import PropTypes from 'prop-types';
import GameContext from '../../../context/gameContext';

export default function Jogos() {
  const { question } = useContext(GameContext);
  const [index, setIndex] = useState(0);
  const [btnJogar, setBtnJogar] = useState(false);
  const [btnDicas, setBtnDicas] = useState(false);
  const [listDicas, setListDicas] = useState();
  const [pontos, setPontos] = useState(100);
  const dataLista = question.dicas;

  useEffect(() => {
    setListDicas([dataLista[index]]);
  },[]);
  
  const maps = () => {
    return (
      <ul>
        {listDicas.map(item => (<li key={item}>{item}</li>))}
      </ul>
    );
  };

  const handleLimit = () => {
    setIndex(index + 1);
    if(index == 9){
      setBtnDicas(true);
    }
  };

  const handleClick = async() => {
    console.log(dataLista);
    setBtnJogar(true);
    console.log(listDicas);
    handleLimit();
  };

  const handleClickDicas = async() => {
    setListDicas( [...listDicas, dataLista[index]]);
    setIndex(index + 1);
    setPontos(pontos - 10),
    handleLimit();
  };

  return (
    <>
      <div className="divPontos">
        <p>Pontos:</p>
        <p className="pontuacao">{pontos}</p>
      </div>
      <button disabled={btnJogar} onClick={handleClick}>Jogar</button>
      <button disabled={btnDicas} onClick={handleClickDicas} className="maisDicas">+</button>
      <div>
        { btnJogar == true? maps(): ''}
      </div>
    </>
  );
}

Jogos.propTypes = {
  pontos: PropTypes.number,
};
