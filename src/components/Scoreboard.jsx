import React from 'react';
import "../styles/Scoreboard.css";

function Scoreboard({ moves, misses, score, scoreGoal }) {
  return (
  <div className="scoreboard">
    <div className="logo">
      <h1 className="title">Pokémon</h1>
      <h2 className="subheading">CARD MATCH GAME</h2>
    </div>
    <div className="info">
      <div className="moves-info">Moves: {moves}</div>
      <div className="misses-info">Misses: {misses}</div>
      <div className="score-info">Score: {score}/{scoreGoal}</div>
    </div>
  </div>
  );
}

export default Scoreboard;
