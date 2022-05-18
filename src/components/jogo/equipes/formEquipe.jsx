import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function FormEquipe(props) {
  const [input, setInput] = useState('');

  
  const handleChangeInput = (event) => {
    const inputs = event.target.value;
    setInput(inputs);
  };
  
  const handleAddItemToList = (event) => {
    event.preventDefault();
    if(input) {
      props.handleAddItemToList(input);
      setInput('');
    }
  };

  return(
    <form action="">
      <label htmlFor="input-name">Insira o nome dos participantes:</label>
      <input id="input-name" type="text" onChange={handleChangeInput} value={input}/>
      <button id="btn-input" type="submit" onClick={handleAddItemToList}>ok</button>
      <p>Cada equipe pode ter até 4 participantes</p>
    </form>
  );
}

FormEquipe.propTypes = {
  handleAddItemToList: PropTypes.func,
  list: PropTypes.array,
};
