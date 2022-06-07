import React  from 'react';
import titulo_literacao from '../../images/titulo_literacao.png';
import MenuStyled from '../../styles/menu/menu';
import ButtonPlay from '../home/buttonPlay';
import ButtonRanking from '../home/buttonRanking';
import {useLocation} from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { AiFillBulb } from 'react-icons/ai';
import { TbBooks } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';

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

  const toggleMenu = () => {
    const nav = document.querySelector('.nav_menu');
    nav.classList.toggle('nav_mobile');
  };

  const MainMenu = () => {
    return (
      <MenuStyled>
        <div className="image_literacao">
          <img src={titulo_literacao} alt="nome do jogo literação" />
        </div>
        <div className="menu">
          <nav className="nav_menu">
            <GiHamburgerMenu onClick={toggleMenu} className="btn_mobile" size="1.8rem" />
            <ul className="nav_ul">
              <li>
                <a href="/" className="home"><HiHome size="1.8rem"/>Home</a>
              </li>
              <li>
                <a href="/sobre" className="sobre"><AiFillBulb size="1.8rem"/>Sobre</a>
              </li>
              <li>
                <a href="/referencias" className="referencias"><TbBooks size="1.8rem"/>Referências</a>
              </li>
              <li>
                {BtnRanking()}
              </li>
              <li>
                {BtnJogar()}
              </li>
            </ul>
          </nav>
        </div>
      </MenuStyled>
    );
  };

  return MainMenu();
}