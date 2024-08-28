import React from 'react';
import Card from './Card.jsx';

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
