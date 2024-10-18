import React from "react";
import './Puzzle.css';
import Navbar from "./Navbar";
const Puzzle = ({ puzzle, onAnswerSelected }) => {
  return (
    <div>
       <Navbar></Navbar>
    <div className="puzzle">
      <h2>{puzzle.question}</h2>
      <div className="options">
        {puzzle.options.map((option, index) => (
          <button key={index} onClick={() => onAnswerSelected(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Puzzle;
