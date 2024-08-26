import React, { useEffect, useState } from 'react';
import Card from "./Card";
import usePokemon from "../usePokemon";



function GameBoard({ cards, onClick, cardState , moves, misses, scoreGoal, score, onRestart }) {
  const { pokemons, createRandomPairs } = usePokemons();

  useEffect(() => {
    createRandomPairs(10);
  }, [createRandomPairs]);
  
  
  
  
  return (

      <div className="cards">
        {cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            onClick={onClick}
            cardState ={cardState}
          />
        ))}
      </div>
      <button className="restart-button" onClick={onRestart}>Restart</button>
    </main>
  );
}
export default GameBoard;