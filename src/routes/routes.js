
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/jogo" element={''} />
        <Route exact path="/sobre" element={''} />
        <Route exact path="/referencias" element={''} />
      </Routes>
    </BrowserRouter>
  );
}