import React from "react";
import "../styles/Popup.css";

export default function Popup({ message, moves, misses, score, onRestart, onQuit = () => {} }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>{message}</h3>
        <div className="trophy-img">🏆</div>
        <p>You played {moves} moves</p>
        <p>You missed {misses} moves</p>
        <p>Your final score is {score}</p>
        <button onClick={onRestart}>Play Again</button>
        <button onClick={onQuit}>Quit</button>
      </div>
    </div>
  );
}