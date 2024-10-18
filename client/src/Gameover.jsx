import React from "react";
import './Gameover.css';

const Gameover = ({ score, onPlayAgain }) => {
  return (
    <div className="game-over">
      <h1>Game Over!</h1>
      <p>Your Score: {score}</p>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
};

export default Gameover;
