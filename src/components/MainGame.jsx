import React, { useState, useEffect } from 'react';
import MemoryGame from './GameLogic.jsx';
import StartMenu from './StartMenu.jsx';
import "../styles/MainGame.css";

function MainGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [matches, setMatches] = useState(0);

  const startGame = (selectedMatches) => {
    setMatches(selectedMatches);
    setGameStarted(true);
  };

  const handleQuit = () => {
    setGameStarted(false);
    setMatches(0);
  };

  return (
    <div className="main-game">
      {gameStarted ? (
        <MemoryGame cardMatches={matches} onQuit={handleQuit} />
      ) : (
        <StartMenu onStartGame={startGame} />
      )}
    </div>
  );
}

export default MainGame;
