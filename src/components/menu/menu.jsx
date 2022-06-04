import React, {useContext} from 'react';
import titulo_literacao from '../../images/titulo_literacao.png';
import MenuStyled from '../../styles/menu/menu';
import ButtonPlay from '../home/buttonPlay';
import {useLocation, useNavigate} from 'react-router-dom';
import GameContext from '../../context/gameContext';

export default function Menu(){
  const {storage} = useContext(GameContext);
  const {pathname} = useLocation();
  const pages = useNavigate();

  const BtnJogar = () => {
    if (pathname.includes('/jogo') || pathname.includes('/ranking') ) {
      return '';
    }
    return (
      <ButtonPlay className="jogo" />
    );
  };

  const BtnRanking = () => {
    if (pathname.includes('/ranking') ) {
      return '';
    }
    return (
      <button onClick={goPages}>Ranking</button>
    );
  };

  const goPages = async () => {
    await storage();
    pages('/ranking');
  };

  const MainMenu = () => {
    return (
      <MenuStyled>
        <div className="image_literacao">
          <img src={titulo_literacao} alt="nome do jogo literação" />
        </div>
        <div className="menu">
          <nav className="nav_menu">
            <a href="/" className="home">Home</a>
            <a href="/sobre" className="sobre">Sobre</a>
            <a href="/referencias" className="referencias">Referências</a>
            {BtnRanking()}
            {BtnJogar()}
          </nav>
        </div>
      </MenuStyled>
    );
  };

  return MainMenu();
}