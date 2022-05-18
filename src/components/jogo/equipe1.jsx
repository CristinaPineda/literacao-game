import React, { useState} from 'react';

export default function Equipe1() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  

  const handleChangeInput = (event) => {
    const inputs = event.target.value;
    setInput(inputs);
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();
    if(input) {
      setList([...list,input]);
      setInput('');
    }
  };

  const nomes = () => {
    return (
      <>
        <form action="">
          <label htmlFor="input-name">Insira o nome dos participantes:</label>
          <input id="input-name" type="text" onChange={handleChangeInput} value={input}/>
          <button id="btn-input" type="submit" onClick={handleAddItemToList}>ok</button>
          <p>Cada equipe pode ter até 4 participantes</p>
        </form>

        <ul>
          {list.map(item => (<li key={item}>{item}</li>))}
        </ul>
      </>
    );
  };

  return nomes();
}