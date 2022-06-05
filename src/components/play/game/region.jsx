import React, {useContext} from 'react';
import GameContext from '../../../context/gameContext';
import PropTypes from 'prop-types';
import norte from '../../../images/norte.png';
import nordeste from '../../../images/nordeste.png';
import sudeste from '../../../images/sudeste.png';
import sul from '../../../images/sul.png';
import centroOeste from '../../../images/centro-oeste.png';

export default function Region(props) {
  const {question} = useContext(GameContext);
  let region = question[props.questionEquipe].regiao;

  const imageRegion = () => {
    switch (region) {
    case 'Norte':
      return(
        <img src={norte} alt="Norte" width="250px"/>
      );
    case 'Nordeste':
      return(
        <img src={nordeste} alt="Nordeste" width="250px"/>
      );
    case 'Sudeste':
      return(
        <img src={sudeste} alt="Sudeste" width="250px"/>
      );
    case 'Sul':
      return(
        <img src={sul} alt="Sul" width="250px"/>
      );
    case 'Centro-Oeste':
      return(
        <img src={centroOeste} alt="Centro-Oeste" width="250px"/>
      );
    }
  };
  
  const Images = () => {
    return(
      <>
        <p>Referência regional: {region}</p>
        {imageRegion()}
      </>
    );
  };

  return Images();
}

Region.propTypes = {
  questionEquipe: PropTypes.number,
};
