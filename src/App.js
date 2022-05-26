import React from 'react';
import Route from './routes/routes';
import GameProvider from './context/gameProvider';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Route />
      </div>
    </GameProvider>
  );
}

export default App;
