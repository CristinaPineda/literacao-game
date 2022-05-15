
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" component={''} />
      <Route exact path="/jogo" component={''} />
      <Route exact path="/sobre" component={''} />
      <Route exact path="/referencias" component={''} />
    </Routes>
  );
}