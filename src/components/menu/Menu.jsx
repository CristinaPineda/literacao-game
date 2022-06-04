import React from 'react';
import titulo_literacao from '../../images/titulo_literacao.png';
import MenuStyled from '../../styles/menu/menu';
import BotaoPlay from '../home/botaoPlay';
import {useLocation} from 'react-router-dom';


export default function Menu(){
  const {pathname} = useLocation();

  const BtnJogar = () => {
    if (pathname.includes('/jogo')) {
      return '';
    }
    return (
      <BotaoPlay className="jogo" />
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
            {BtnJogar()}
          </nav>
        </div>
      </MenuStyled>
    );
  };

  return MainMenu();
}