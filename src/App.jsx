import React, { useEffect } from 'react';
import usePokemon from './usePokemon.jsx';
import GameBoard from './components/GameBoard.jsx';
import MemoryGame from './components/GameLogic.jsx';
import StartMenu from './components/StartMenu.jsx';
import MainGame from './components/MainGame.jsx';

function App() {


  return (
    <div>
      <div>
        <h1>Gameboard Test</h1>
        <MainGame></MainGame>
      </div>
    </div>
  );
}

export default App;
