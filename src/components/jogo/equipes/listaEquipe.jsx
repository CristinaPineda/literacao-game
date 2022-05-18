import React from 'react';
import PropTypes from 'prop-types';

export default function ListaEquipe(props) {

  return (
    <ul>
      {props.list.map(item => (<li key={item}>{item}</li>))}
    </ul>
  );
}

ListaEquipe.propTypes = {
  list: PropTypes.array
};