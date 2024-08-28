import React from 'react';

export default function StartMenu({ onStartGame }) {
  const difficulties = [
    { label: 'Easy', matches: 5 },
    { label: 'Medium', matches: 10 },
    { label: 'Hard', matches: 15 },
    { label: 'Advanced', matches: 20 },
    { label: 'Impossible', matches: 25 },
  ];

  return (
    <div className="start-menu">
      <h1>Pokemon Memory Game</h1>
      <h2>Select Difficulty</h2>
      <div className="difficulty-buttons">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty.label}
            onClick={() => onStartGame(difficulty.matches)}
          >
            {difficulty.label}
          </button>
        ))}
      </div>
    </div>
  );
}
