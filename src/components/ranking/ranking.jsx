import React, {useContext, useEffect} from 'react';
import GameContext from '../../context/gameContext';

export default function Ranked() {
  const {listRank} = useContext(GameContext);

  useEffect(() => {
    console.log(listRank);
  }, []);

  return (
    <>
      <h1 className="h1Ranking">TOP 10 - Melhores pontuações</h1>
      <div className="divListRank">
        <ol>
          {listRank.map(item => (<li key={item.player}>{item.player}: {item.score}</li>))}
        </ol>
      </div>
    </>
  );
}