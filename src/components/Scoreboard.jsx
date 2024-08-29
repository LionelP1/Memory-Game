import React from 'react';
import "../styles/Scoreboard.css";

function Scoreboard({ moves, misses, score, scoreGoal, onQuit }) {
  return (
    <div className="scoreboard-wrapper">
      <div className="scoreboard">
        <div className="logo" onClick={onQuit}>
          <h1 className="title">Pokémon</h1>
          <h2 className="subheading">CARD MATCH GAME</h2>
        </div>
        <div className="info">
          <div className="moves-info">Moves: {moves}</div>
          <div className="misses-info">Misses: {misses}</div>
          <div className="score-info">Score: {score}/{scoreGoal}</div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
