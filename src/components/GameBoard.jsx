import React from 'react';
import Card from './Card.jsx';
import "../styles/GameBoard.css";

function GameBoard({ cards, onCardClick }) {
  return (
    <div className="game-grid">
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
