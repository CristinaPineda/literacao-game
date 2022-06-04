import React, {useContext} from 'react';
import GameContext from '../../../context/gameContext';

export default function Correct() {
  const {ok} = useContext(GameContext);

  const verifyCorrect = () => {
    if (ok == 'true') {
      return (
        <>
          <spam className="spamCorrect">CORRETO!!</spam>
        </>
      );
    } else if(ok == 'false') {
      return (
        <>
          <spam className="spanWrong">ERRADO!!</spam>
        </>
      );
    } else if(ok == '') {
      return (
        <>
        </>
      );
    }
  };

  return verifyCorrect();
}
