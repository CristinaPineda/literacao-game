import React, {useContext} from 'react';
import GameContext from '../../context/gameContext';

export default function Ranked() {
  const {listRank} = useContext(GameContext);
  const top = listRank.slice(0,10);

  const TopList = () => {
    if(listRank == null) {
      return (
        <>
          <h2>Sem ranking por enquanto!!</h2>
          <p>Jogue algumas partidas e volte aqui para conferir o Top 10!</p>
        </>
      );
    } else {
      return (
        <>
          <h1 className="h1Ranking">TOP 10 - Melhores pontuações</h1>
          <div className="divListRank">
            <ol>
              {top.map((item, id) => (<li key={id}>{item.player}: {item.score}</li>))}
            </ol>
          </div>
        </>
      );
    }
  };

  return TopList();
}