import React from 'react';
import "../styles/StartMenu.css";

export default function StartMenu({ onStartGame }) {
  const difficulties = [
    { label: 'Easy', matches: 5 },
    { label: 'Medium', matches: 10 },
    { label: 'Hard', matches: 15 },
    { label: 'Advance', matches: 20 },
    { label: 'Impossible', matches: 30 },
  ];

  return (
    <div className="start-menu">
      <h1 className="title">Pokémon</h1>
      <h2 className="subheading">CARD MATCH GAME</h2>
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
