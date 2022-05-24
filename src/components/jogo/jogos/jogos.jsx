import React, { useEffect, useState }from 'react';
import data from '../../../assets/data/data.json';

export default function Jogos() {
  const [question, setQuestion] = useState();
  const [dataLista, setDataLista] = useState([]);
  const [index, setIndex] = useState(0);
  const [btnJogar, setBtnJogar] = useState(false);

  useEffect(() => {
    const randomElement = data[Math.floor(Math.random() * data.length)];
    setQuestion(randomElement);
  }, []);

  const handleClick = async() => {
    setBtnJogar(true);
    setDataLista(question.dicas);
  };

  const handleClickDicas = async() => {
    setIndex(index + 1);
    setDataLista(dataLista);
  };

  return (
    <>
      <button disabled={btnJogar} onClick={handleClick}>Jogar</button>
      <button onClick={handleClickDicas} className="maisDicas">+</button>
      <ul>
        {dataLista.map(item => (<li key={item}>{item}</li>))}
      </ul>
    </>
  );
}