import React from "react";
import Card from "./Card";

function GameBoard({ cards, onClick, cardsShowing, moves, misses, scoreGoal, score, onRestart }) {
  return (
    <main>
      <p className="game-info">
        <div className="moves-info">Moves: {moves}</div>
        <div className="misses-info">Misses: {misses}</div>
        <div className="score-info">Score: {score}/{scoreGoal}</div>
      </p>

      <div className="cards">
        {cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            onClick={onClick}
            cardsShowing={cardsShowing}
          />
        ))}
      </div>
      <button className="restart-button" onClick={onRestart}>Restart</button>
    </main>
  );
}
export default GameBoard;