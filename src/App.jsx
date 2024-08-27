import React, { useEffect } from 'react';
import usePokemon from './usePokemon.jsx';
import GameBoard from './components/GameBoard.jsx';
import MemoryGame from './components/GameLogic.jsx';

function App() {


  return (
    <div>
      <div>
        <h1>Gameboard Test</h1>
        <MemoryGame/>
      </div>
    </div>
  );
}

export default App;
