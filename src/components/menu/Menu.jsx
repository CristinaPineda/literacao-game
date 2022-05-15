import React from 'react';
import titulo_literacao from '../../images/titulo_literacao.png';
import MenuStyled from '../../styles/menu/menu';

export default function Menu(){
  return (
    <MenuStyled>
      <div className="image_literacao">
        <img src={ titulo_literacao } alt="nome do jogo literação" />
      </div>
      <div className="menu">
        <nav className="nav_menu">
          <a href="/" className="home">Home</a>
          <a href="/jogo" className="jogo">Jogo</a>
          <a href="/sobre" className="sobre">Sobre</a>
          <a href="/referencias" className="referencias">Referências</a>
        </nav>
      </div>
    </MenuStyled>
  );
}