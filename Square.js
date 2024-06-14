import React from 'react';
import './Square.css';

function Square({ value, onSquareClick, isWiningSquare }) {

  let className = 'square';
  if (value === 'X') {
    className += ' x';
  } else if (value === 'O') {
    className += ' o';
  }
  if (isWiningSquare) {
    console.log("wining color: Red")
    className += ' win';
  }
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
