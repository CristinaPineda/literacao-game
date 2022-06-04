
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Battle from '../pages/Battle';
import History from '../pages/History';
import Reference from '../pages/Reference';
import Ranking from '../pages/Ranking';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/jogo" element={<Battle />} />
        <Route exact path="/sobre" element={<History />} />
        <Route exact path="/referencias" element={<Reference />} />
        <Route exact path="/ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
}