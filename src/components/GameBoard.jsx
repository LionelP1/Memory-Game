import React from 'react';
import Card from './Card';

function GameBoard({ cards, onCardClick }) {
  return (
    <div className="memory-game-grid">
      {cards.map((card, index) => (
        <Card
          id={index}
          key={index}
          card={card}
          cardState={card.state}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default GameBoard;






// import React, { useEffect, useState } from 'react';
// import Card from "./Card";
// import usePokemon from "../usePokemon";



// function GameBoard({ cards, onClick, cardState , moves, misses, scoreGoal, score, onRestart }) {
//   const { pokemons, createRandomPairs } = usePokemons();

//   useEffect(() => {
//     createRandomPairs(10);
//   }, [createRandomPairs]);
  
  
  
  
//   return (

//       <div className="cards">
//         {cards.map((card) => (
//           <Card
//             card={card}
//             key={card.id}
//             onClick={onClick}
//             cardState ={cardState}
//           />
//         ))}
//       </div>
//       <button className="restart-button" onClick={onRestart}>Restart</button>
//     </main>
//   );
// }
// export default GameBoard;