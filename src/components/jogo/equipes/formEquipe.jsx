import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function FormEquipe(props) {
  const [input, setInput] = useState('');
  const [on, setOn] = useState(false);
  const [max, setMax] = useState(0);

  const handleChangeInput = (event) => {
    const inputs = event.target.value;
    setInput(inputs);
  };
  
  const handleLimit = () => {
    setMax(max + 1);
    if(max == 3){
      setOn(true);
    }
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();
    if(input) {
      props.handleAddItemToList(input);
      setInput('');
    }
    handleLimit();
  };

  return(
    <form action="">
      <label  htmlFor="input-name">Insira o nome dos participantes:</label>
      <input  disabled={on} id="input-name" type="text" onChange={handleChangeInput} value={input}/>
      <button disabled={on} id="btn-input" type="submit" onClick={handleAddItemToList} >ok</button>
      <p>Cada equipe pode ter até 4 participantes</p>
    </form>
  );
}

FormEquipe.propTypes = {
  handleAddItemToList: PropTypes.func,
};
