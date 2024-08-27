// import React, { useState, useEffect } from 'react';
// import GameBoard from './GameBoard.jsx';
// import ScoreBoard from './ScoreBoard.jsx';
// import usePokemon from '../usePokemon.jsx';

// function MemoryGame() {
//   const { pokemons, createRandomPairs } = usePokemon();
//   const [cards, setCards] = useState([]);
//   const [flippedCards, setFlippedCards] = useState([]);
//   const [matchedCards, setMatchedCards] = useState([]);
//   const [isLocked, setIsLocked] = useState(false);

//   //Scoreboard states
//   const [moves, setMoves] = useState(0);
//   const [misses, setMisses] = useState(0);
//   const [score, setScore] = useState(0);
//   const scoreGoal = cards.length / 2; // The goal is to match all pairs


//   // Create Pokemon pairs
//   useEffect(() => {
//     createRandomPairs(3);
//   }, []);

//   // Create cards array when pokemons are updated
//   useEffect(() => {
//     if (pokemons.length > 0) {
//       const cardsArray = pokemons.map((item, index) => ({
//         ...item,
//         id: index,
//         state: 'back'
//       }));
//       setCards(cardsArray);
//     }
//   }, [pokemons]);

//   const handleRestart = () => {
//     setCards(prevCards => prevCards.map(card => ({ ...card, state: 'back' })));
//     setFlippedCards([]);
//     setMatchedCards([]);
//     setIsLocked(false);
//     setMoves(0);
//     setMisses(0);
//     setScore(0);
//   };

//   const handleCardClick = (id) => {
//     if (isLocked) return;

//     const clickedCard = cards.find(card => card.id === id);

//     if (flippedCards.length === 2 || clickedCard.state !== 'back') {
//       return;
//     }

//     const newCards = cards.map(card =>
//       card.id === id ? { ...card, state: 'front' } : card
//     );
//     setCards(newCards);
//     setFlippedCards([...flippedCards, id]);

//     if (flippedCards.length === 1) {
//       setIsLocked(true);
//       const firstCard = cards.find(card => card.id === flippedCards[0]);

//       //If there is a match
//       if (firstCard.name === clickedCard.name) {
//         setMatchedCards(prev => [...prev, firstCard.id, clickedCard.id]);
//         setFlippedCards([]);

//         //Set cards to invisible
//         setTimeout(() => {
//           const updatedCards = newCards.map(card =>
//             card.id === id || card.id === firstCard.id ? { ...card, state: 'invisible' } : card
//           );
//           setCards(updatedCards);
//           setIsLocked(false);
//         }, 2000);
//       } 
//       else {
//         setTimeout(() => {
//           setCards(prevCards => prevCards.map(card =>
//             flippedCards.includes(card.id) || card.id === id
//               ? { ...card, state: 'back' }
//               : card
//           ));
//           setFlippedCards([]);
//           setIsLocked(false);
//         }, 2000);

//       }
//     }
//   };

//   return (
//     <div className="Game-Field">
//       <GameBoard
//         cards={cards}
//         onCardClick={handleCardClick}
//       />
//       <button className="restart-button" onClick={handleRestart}>Restart</button>
//     </div>
//   );
// }

// export default MemoryGame;



import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard.jsx';
import Scoreboard from './Scoreboard.jsx';
import usePokemon from '../usePokemon.jsx';

function MemoryGame() {
  const { pokemons, createRandomPairs } = usePokemon();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const [misses, setMisses] = useState(0);
  const [score, setScore] = useState(0);
  const scoreGoal = cards.length / 2; // The goal is to match all pairs

  // Create Pokemon pairs
  useEffect(() => {
    createRandomPairs(3);
  }, []);

  // Create cards array when pokemons are updated
  useEffect(() => {
    if (pokemons.length > 0) {
      const cardsArray = pokemons.map((item, index) => ({
        ...item,
        id: index,
        state: 'back'
      }));
      setCards(cardsArray);
    }
  }, [pokemons]);

  const handleRestart = () => {
    setCards(prevCards => prevCards.map(card => ({ ...card, state: 'back' })));
    setFlippedCards([]);
    setMatchedCards([]);
    setIsLocked(false);
    setMoves(0);
    setMisses(0);
    setScore(0);
  };

  const handleCardClick = (id) => {
    if (isLocked) return;

    const clickedCard = cards.find(card => card.id === id);

    if (flippedCards.length === 2 || clickedCard.state !== 'back') {
      return;
    }


    const newCards = cards.map(card =>
      card.id === id ? { ...card, state: 'front' } : card
    );
    setCards(newCards);
    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      setIsLocked(true);
      setMoves(moves + 1);

      const firstCard = cards.find(card => card.id === flippedCards[0]);

      // If there is a match
      if (firstCard.name === clickedCard.name) {
        setMatchedCards(prev => [...prev, firstCard.id, clickedCard.id]);
        setFlippedCards([]);
        setScore(score + 1); // Increment score on a match

        // Set cards to invisible
        setTimeout(() => {
          const updatedCards = newCards.map(card =>
            card.id === id || card.id === firstCard.id ? { ...card, state: 'invisible' } : card
          );
          setCards(updatedCards);
          setIsLocked(false);
        }, 2000);
      } else {
        setMisses(misses + 1); // Increment misses on a failed match
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card =>
            flippedCards.includes(card.id) || card.id === id
              ? { ...card, state: 'back' }
              : card
          ));
          setFlippedCards([]);
          setIsLocked(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="Game-Field">
      <Scoreboard 
        moves={moves} 
        misses={misses} 
        score={score} 
        scoreGoal={scoreGoal} 
      />
      <GameBoard
        cards={cards}
        onCardClick={handleCardClick}
      />
      <button className="restart-button" onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default MemoryGame;

