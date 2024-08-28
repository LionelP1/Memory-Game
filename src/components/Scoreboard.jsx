import React from 'react';
import "../styles/Scoreboard.css";

function Scoreboard({ moves, misses, score, scoreGoal }) {
  return (
  <div className="scoreboard">
    <div className="moves-info">Moves: {moves}</div>
    <div className="misses-info">Misses: {misses}</div>
    <div className="score-info">Score: {score}/{scoreGoal}</div>
  </div>
  );
}

export default Scoreboard;
