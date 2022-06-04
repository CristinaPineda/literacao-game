import React, {useContext} from 'react';
import GameContext from '../../../context/gameContext';

export default function Correct() {
  const {ok} = useContext(GameContext);

  const verifyCorrect = () => {
    if (ok == 'true') {
      return (
        <>
          <p className="spamCorrect">CORRETO!!</p>
        </>
      );
    } else if(ok == 'false') {
      return (
        <>
          <p className="spanWrong">ERRADO!!</p>
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
