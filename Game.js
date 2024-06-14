import React, { useState } from 'react';
import Board from './Board';
import './App.css';
import { Box } from '@mui/material';




function Game() {

  const [history, setHistory] = useState([{sqres: Array(25).fill(null),location:null}]);
  
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].sqres;
  const [isAscending, setAscending] = useState(true);

  function handlePlay(nextSquares,movelocation) {
    const nextHistory = [...history.slice(0, currentMove + 1), {sqres: nextSquares,location:movelocation}];
    console.log("nextHistory : ");
    console.log(nextHistory);

    console.log("currentMove : " + currentMove);

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    console.log("nextHistory.length-1 : ");
    console.log(nextHistory.length - 1);

  }

  function jumpTo(nextMove) {

    console.log("next Move : ");
    console.log(nextMove);
    setCurrentMove(nextMove);
  }
  function toggleOrderMoves() {
    setAscending(!isAscending);
  }

  const moves = history.map((squares, move) => {

    let description;
    if (move > 0) {
      description = `Go to move #${move} (${squares.location.row},${squares.location.col})` ;
    } else {
      description = 'Go to game start';
    }
    return (


      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>

    );
  });
  


  if (!isAscending) {
    moves.reverse();
  }

  

  

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}  />
      </div>
      <div className="game-info">
        <button onClick={toggleOrderMoves}>
          {isAscending ? 'Sort Descending' : 'Sort Ascending'}
        </button>
        <Box sx={{ width: '300px', height: '400px', overflow: 'auto', border: '1px solid #ccc' }}>
          <ol>{moves}</ol>
        </Box>
      </div>
    </div>
  );
}

export default Game;
// RITM53463202--> Ticket Approval for slack
// 	Active Directory Group Membership Change  -->RITM53463295