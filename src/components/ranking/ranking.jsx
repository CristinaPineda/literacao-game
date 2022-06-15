import React, {useContext} from 'react';
import GameContext from '../../context/gameContext';
import trofeu from '../../images/trofeu.png';
import RankStyled from '../../styles/ranking/rankPage';
import RankStyledOff from '../../styles/ranking/rankPageOff';
import {FaMedal} from 'react-icons/fa';
import {MdOutlineDoNotDisturb} from 'react-icons/md';

export default function Ranked() {
  const {listRank} = useContext(GameContext);

  const TopList = () => {
    if(listRank == null) {
      return (
        <RankStyledOff>
          <MdOutlineDoNotDisturb size="8rem" color="red"/>
          <div>
            <h2>Sem ranking por enquanto!!</h2>
            <p>Jogue algumas partidas e volte aqui para conferir o Top 10!</p>
          </div>
        </RankStyledOff>
      );
    } else {
      listRank.slice(0,10);
      return (
        <RankStyled>
          <div className="top">
            <img src={trofeu} />
            <div className="divListRank">
              <h1 className="h1Ranking"><FaMedal size="2rem" color="orange"/><strong>TOP 10</strong> <br/>Melhores pontuações</h1>
              <ol>
                {listRank.map((item, id) => (<li key={id}>{item.player} pontos: {item.score}</li>))}
              </ol>
            </div>
          </div>
        </RankStyled>
      );
    }
  };

  return TopList();
}