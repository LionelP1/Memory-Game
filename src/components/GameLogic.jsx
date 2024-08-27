import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard.jsx';
import usePokemon from '../usePokemon.jsx';
import { useInsertionEffect } from 'react';

function MemoryGame() {
  const { pokemons, createRandomPairs } = usePokemon();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // Create Pokemon pairs
  useEffect(() => {
    createRandomPairs(2);
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



//   useEffect(() => {
//     if (matchedCards.length === cards.length) {
//       alert('Congratulations! You have matched all the cards.');
//       resetGame();
//     }
//   }, [matchedCards]);

//   const resetGame = () => {
//     createRandomPairs(10); // Reset with a new set of cards
//     setFlippedCards([]);
//     setMatchedCards([]);
//   };

  const handleCardClick = (id) => {
    console.log('hello');
    const clickedCard = cards[id];

    if (flippedCards.length === 2 || clickedCard.state !== 'back') {
      return;
    }

    const newCards = cards.map(card => card.id === id ? { ...card, state: 'front' } : card);
    setCards(newCards);
    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      const firstCard = cards.find(card => card.id === flippedCards[0]);
      if (firstCard.name === clickedCard.name) {
        setMatchedCards([...matchedCards, firstCard.id, clickedCard.id]);
        setFlippedCards([]);
      } 
    //   else {
    //     setTimeout(() => {
    //       setCards(cards.map(card => flippedCards.includes(card.id) || card.id === id ? { ...card, state: 'back' } : card));
    //       setFlippedCards([]);
    //     }, 1000);
    //   }
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
