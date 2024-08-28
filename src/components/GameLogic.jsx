import React, { useState, useEffect } from 'react';
import usePokemon from '../usePokemon.jsx';
import GameBoard from './GameBoard.jsx';
import Scoreboard from './Scoreboard.jsx';
import Popup from './Popup.jsx';


function MemoryGame({cardMatches, onQuit}) {
  const { pokemons, createRandomPairs } = usePokemon();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Scoreboard states
  const [moves, setMoves] = useState(0);
  const [misses, setMisses] = useState(0);
  const [score, setScore] = useState(0);
  const scoreGoal = cards.length / 2;

  // Create Pokemon pairs
  useEffect(() => {
    createRandomPairs(cardMatches);
  }, [cardMatches]);

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

  const handleReset = () => {
    setCards(prevCards => prevCards.map(card => ({ ...card, state: 'back' })));
    setFlippedCards([]);
    setMatchedCards([]);
    setIsLocked(false);
    setMoves(0);
    setMisses(0);
    setScore(0);
    setGameWon(false);
  };

  const handleRestart = () => {
    createRandomPairs(cardMatches);
    handleReset();
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

        // Set cards to invisible
        setTimeout(() => {
          const updatedCards = newCards.map(card =>
            card.id === id || card.id === firstCard.id ? { ...card, state: 'invisible' } : card
          );
          setCards(updatedCards);
          setScore(score + 1);
          setIsLocked(false);

          if (score + 1 === scoreGoal) {
            setGameWon(true);
          }

        }, 1600);
      } else {
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card =>
            flippedCards.includes(card.id) || card.id === id
              ? { ...card, state: 'back' }
              : card
          ));
          setFlippedCards([]);
          setMisses(misses + 1);
          setIsLocked(false);
        }, 1600);
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
      <button className="reset-button" onClick={handleReset}>Reset</button>
      
      {gameWon && (
        <Popup
          message="You won the game!"
          moves={moves}
          misses={misses}
          score={score}
          onRestart={handleRestart}
          onQuit={onQuit}
        />
      )}
    </div>
  );
}

export default MemoryGame;

