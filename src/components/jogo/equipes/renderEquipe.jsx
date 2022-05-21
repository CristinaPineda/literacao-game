import React, { useState } from 'react';
import ListaEquipe from './listaEquipe';
import FormEquipe from './formEquipe';

export default function RenderEquipe() {
  const [list, setList] = useState([]);

  const handleAddItemToList = async (newStudent) => {
    setList([...list, newStudent]);
  };

  return (
    <>
      <FormEquipe  handleAddItemToList={handleAddItemToList} />
      <ListaEquipe list={list}  />
    </>
  );
}
