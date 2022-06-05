import React, { useContext, useEffect, useState }from 'react';
import GameContext from '../../../context/gameContext';
import DivJogosStyled from '../../../styles/jogo/jogos/jogos';
import NextGame from './nextGame';
import Correct from './correct';

export default function Game() {
  const { question, score, setScore, setOk} = useContext(GameContext);
  const [index, setIndex] = useState(0);
  const [btnJogar, setBtnJogar] = useState(false);
  const [btnDicas, setBtnDicas] = useState(true);
  const [listDicas, setListDicas] = useState();
  const [pontos, setPontos] = useState(100);
  const [questionEquipe, setQuestionEquipe] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(true);
  const [input, setInput] = useState('');
  const [btnResponse, setBtnResponse] = useState(true);
  const [inputRes, setInputRes] = useState(true);
  const dataLista = question[questionEquipe].dicas;
  const responseQuestion = question[questionEquipe].resposta;
  const [resp, setResp] = useState();

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
    setInputRes(false);
    setBtnResponse(false);
    setNextQuestion(true);
    if(index == 9){
      setBtnDicas(true);
    }
  };

  const handleClick = () => {
    setBtnJogar(true);
    setBtnDicas(false);
    setInputRes(false);
    handleLimit();
  };

  const handleClickDicas = () => {
    setListDicas( [...listDicas, dataLista[index]]);
    setIndex(index + 1);
    setPontos(pontos - 10),
    handleLimit();
  };
  
  const verifyResponse = async() => {
    let response = responseQuestion.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    let responseInput = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    if(response == responseInput) {
      setScore(score + pontos);
      setOk('true');
    } else {
      setOk('false');
    }
    setResp(responseQuestion);
    setInput('');
    setBtnResponse(true);
    setInputRes(true);
    setBtnDicas(true);
    setNextQuestion(false);
    setQuestionEquipe(questionEquipe + 1);
    setIndex(0);
  };

  const handleChangeInput = (event) => {
    const inputs = event.target.value;
    setInput(inputs);
    setBtnResponse(false);
  };

  const next = async () => {
    setBtnDicas(false);
    setOk('');
    setPontos(100);    
    handleLimit();
    setListDicas([dataLista[index]]);
  };

  const newQuestion = () => {
    if(questionEquipe <= 4) {
      return(
        <button disabled={nextQuestion} className="btnNext" onClick={next}>Próxima questão</button>
      );
    } else {
      setListDicas(['', '']);
    }
  };

  const RenderGame = () => {
    return (
      <DivJogosStyled>
        <div className="divPontos">
          <p>Pontos da questão: {pontos}</p>
        </div>
        <div>
          <button disabled={btnJogar} onClick={handleClick}>Jogar</button>
          <button disabled={btnDicas} onClick={handleClickDicas} className="maisDicas">+</button>
          { btnJogar == true? listMap(): ''}
        </div>
        <div className="divResposta">
          <input disabled={inputRes} type="text" className="inputResposta" placeholder="Digite sua resposta aqui:" onChange={handleChangeInput} value={input}/>
          <button disabled={btnResponse} className="btnResposta" onClick={verifyResponse}>Responder</button>
          <Correct responseQuestion={resp} />
        </div>
        <div className="divNextEquipe">
          {questionEquipe <= 4? newQuestion() : <NextGame />}
        </div>
      </DivJogosStyled>
    );
  };

  return RenderGame();
}
