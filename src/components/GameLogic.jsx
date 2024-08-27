// import React, { useState, useEffect } from 'react';
// import GameBoard from './GameBoard.jsx';
// import usePokemon from '../usePokemon.jsx';

// function MemoryGame() {
//   const { pokemons, createRandomPairs } = usePokemon();
//   const [cards, setCards] = useState([]);
//   const [flippedCards, setFlippedCards] = useState([]);
//   const [matchedCards, setMatchedCards] = useState([]);

//   // Create Pokemon pairs
//   useEffect(() => {
//     createRandomPairs(50);
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



// //   useEffect(() => {
// //     if (matchedCards.length === cards.length) {
// //       alert('Congratulations! You have matched all the cards.');
// //       resetGame();
// //     }
// //   }, [matchedCards]);

// //   const resetGame = () => {
// //     createRandomPairs(10); // Reset with a new set of cards
// //     setFlippedCards([]);
// //     setMatchedCards([]);
// //   };

//   const handleCardClick = (id) => {
//     console.log('hello');
//     const clickedCard = cards[id];

//     if (flippedCards.length === 2 || clickedCard.state !== 'back') {
//       return;
//     }

//     const newCards = cards.map(card => card.id === id ? { ...card, state: 'front' } : card);
//     setCards(newCards);
//     setFlippedCards([...flippedCards, id]);

//     if (flippedCards.length === 1) {
//       const firstCard = cards.find(card => card.id === flippedCards[0]);
//       if (firstCard.name === clickedCard.name) { //Cards match
//         setMatchedCards([...matchedCards, firstCard.id, clickedCard.id]);
//         setFlippedCards([]);
//         const updatedCards = cards.map(card => 
//             card.id === id || card.id === firstCard.id ? { ...card, state: 'invisible' } : card
//         );
//         setCards(updatedCards);
//       } 
//     else {
//     setTimeout(() => {
//           setCards(cards.map(card => flippedCards.includes(card.id) || card.id === id ? { ...card, state: 'back' } : card));
//           setFlippedCards([]);
//         }, 1500);
//       }
//     }
//   };



//   return (
//     <GameBoard
//       cards={cards}
//       onCardClick={handleCardClick}
//     />
//   );
// }

// export default MemoryGame;



import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard.jsx';
import usePokemon from '../usePokemon.jsx';

function MemoryGame() {
  const { pokemons, createRandomPairs } = usePokemon();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

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

  const handleCardClick = (id) => {
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
      const firstCard = cards.find(card => card.id === flippedCards[0]);

      if (firstCard.name === clickedCard.name) {
        setMatchedCards(prev => [...prev, firstCard.id, clickedCard.id]);
        setFlippedCards([]);

        setCards(prevCards => prevCards.map(card =>
          card.id === id || card.id === firstCard.id
            ? { ...card, state: 'invisible' } : card
        ));
      } 
      else {
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card =>
            flippedCards.includes(card.id) || card.id === id
              ? { ...card, state: 'back' }
              : card
          ));
          setFlippedCards([]);
        }, 1500);
      }
    }
  };

  return (
    <GameBoard
      cards={cards}
      onCardClick={handleCardClick}
    />
  );
}

export default MemoryGame;



//     setTimeout(() => {
//           setCards(cards.map(card => flippedCards.includes(card.id) || card.id === id ? { ...card, state: 'back' } : card));
//           setFlippedCards([]);
//         }, 1500);
//       }
//     }