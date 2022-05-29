import React, { useContext, useEffect, useState }from 'react';
import GameContext from '../../../context/gameContext';
import DivJogosStyled from '../../../styles/jogo/jogos/jogos';

export default function Jogos() {
  const { question } = useContext(GameContext);
  const [index, setIndex] = useState(0);
  const [btnJogar, setBtnJogar] = useState(false);
  const [btnDicas, setBtnDicas] = useState(true);
  const [listDicas, setListDicas] = useState();
  const [pontos, setPontos] = useState(100);
  const [questionEquipe, setQuestionEquipe] = useState(0);
  const [input, setInput] = useState('');
  const dataLista = question[questionEquipe].dicas;
  const responseQuestion = question[questionEquipe].resposta;
  const [btnResponse, setBtnResponse] = useState(true);
  const [ptsEquipe, setPtsEquipe] = useState(0);

  useEffect(() => {
    setListDicas([dataLista[index]]);
    console.log(question);
  },[]);
  
  const listMap = () => {
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
      setQuestionEquipe(1);
    }
  };

  const handleClick = async() => {
    console.log(dataLista);
    setBtnJogar(true);
    setBtnDicas(false);
    console.log(listDicas);
    handleLimit();
  };

  const handleClickDicas = async() => {
    setListDicas( [...listDicas, dataLista[index]]);
    setIndex(index + 1);
    setPontos(pontos - 10),
    handleLimit();
  };

  const verifyResponse = () => {
    if(input == responseQuestion) {
      console.log('certo');
      setPtsEquipe(ptsEquipe + pontos);
    } else {
      console.log('errado');
    }
  };

  const handleChangeInput = (event) => {
    const inputs = event.target.value;
    setInput(inputs);
    setBtnResponse(false);
  };

  return (
    <DivJogosStyled>
      <p>{ptsEquipe}</p>
      <div className="divPontos">
        <p>Pontos da questão:</p>
        <p className="pontuacao">{pontos}</p>
      </div>
      <div>
        <button disabled={btnJogar} onClick={handleClick}>Jogar</button>
        <button disabled={btnDicas} onClick={handleClickDicas} className="maisDicas">+</button>
        { btnJogar == true? listMap(): ''}
      </div>
      <div className="divResposta">
        <input type="text" className="inputResposta" placeholder="Digite sua resposta aqui:" onChange={handleChangeInput} />
        <button disabled={btnResponse} className="btnResposta" onClick={verifyResponse}>Responder</button>
      </div>
    </DivJogosStyled>
  );
}
