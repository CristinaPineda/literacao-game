
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Jogo from '../pages/Jogo';
import Sobre from '../pages/Sobre';
import Referencias from '../pages/Referencias';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/jogo" element={<Jogo />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/referencias" element={<Referencias />} />
      </Routes>
    </BrowserRouter>
  );
}