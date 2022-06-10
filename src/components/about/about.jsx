import React from 'react';
import Purpose from './purpose';
import Justification from './justification';
import Students from './students';
import Description from './description';
import AboutStyled from '../../styles/sobre/sobreJogo';

export default function About() {
  return (
    <AboutStyled>
      <Description />
      <Purpose />
      <Justification />
      <Students />
    </AboutStyled>
  );
}