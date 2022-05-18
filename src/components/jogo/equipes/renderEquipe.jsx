import React, { useState } from 'react';
import ListaEquipe from './listaEquipe';
import FormEquipe from './formEquipe';

export default function RenderEquipe() {
  const [list, setList] = useState([]);
  const inputOn = document.querySelector('#input-name');
  const btnOn = document.querySelector('#btn-input');

  const handleAddItemToList = (newStudent) => {
    if (list.length <= 3) {
      setList([...list, newStudent]);
      inputOn.disabled = false;
      btnOn.disabled = false;
    } else {
      inputOn.disabled = true;
      btnOn.disabled = false;
    }
  };

  return (
    <>
      <FormEquipe handleAddItemToList={handleAddItemToList} />
      <ListaEquipe list={list}  />
    </>
  );
}
