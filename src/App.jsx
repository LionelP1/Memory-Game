


import React, { useEffect } from 'react';
import usePokemon from './usePokemon.jsx';

function App() {
  const { pokemons, createRandomPairs } = usePokemon();

  useEffect(() => {
    createRandomPairs(5);
  }, []);


  return (
    <div>
      <h1>Random Pokémon</h1>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
