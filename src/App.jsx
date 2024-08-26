import React, { useEffect } from 'react';
import usePokemon from './usePokemon.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const { pokemons, createRandomPairs } = usePokemon();

  useEffect(() => {
    createRandomPairs(3);
  }, []);



  return (
    <div>
      <div>
        <h1>Gameboard Test</h1>
        <GameBoard
          cards={pokemons}
          onClick={() => console.log('yes')}
          cardState={'front'}
          moves={5}
          misses={5}
          scoreGoal={5}
          score={5}
          onRestart={() => {}}
        />
      </div>
    </div>
  );
}

export default App;
