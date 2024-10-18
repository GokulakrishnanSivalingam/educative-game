import React, { useState } from "react";
import Game from "./G2";
import GameOver from "./Gameover";


const Game2 = () => {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const onGameOver = () => {
    setGameOver(true);
  };

  const onPlayAgain = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="app">
      {gameOver ? (
        <GameOver score={score} onPlayAgain={onPlayAgain} />
      ) : (
        <Game setScore={setScore} onGameOver={onGameOver} />
      )}
    </div>
  );
};

export default Game2;
