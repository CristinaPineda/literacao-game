import React from 'react';
import Purpose from './purpose';
import Justification from './justification';
import Students from './students';
import Description from './description';

export default function About() {
  return (
    <>
      <Description />
      <Purpose />
      <Justification />
      <Students />
    </>
  );
}