import React  from 'react';
import titulo_literacao from '../../images/titulo_literacao.png';
import MenuStyled from '../../styles/menu/menu';
import ButtonPlay from '../home/buttonPlay';
import ButtonRanking from '../home/buttonRanking';
import {useLocation} from 'react-router-dom';

export default function Menu(){
  const {pathname} = useLocation();

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
      <ButtonRanking />
    );
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