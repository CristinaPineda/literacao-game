import React, { useContext, useState }from 'react';
import GameContext from '../../../context/gameContext';

export default function Jogos() {
  const { question } = useContext(GameContext);
  const [dataLista] = useState([]);
  const [setListDicas] = useState([]);
  const [index, setIndex] = useState(0);
  const [btnJogar] = useState(false);
  
  const handleClick = async() => {
    setBtnJogar(true);
    setDataLista(question.dicas);
  };  };

  const handleClickDicas = async() => {
    setIndex(index + 1);
    setDataLista(dataLista);
  };

  return (
    <>
      <button disabled={btnJogar} onClick={handleClick}>Jogar</button>
      <button onClick={handleClickDicas} className="maisDicas">+</button>
      <ul>
        {/* {listDicas.map(item => (<li key={item}>{item}</li>))} */}
      </ul>
    </>
  );
}