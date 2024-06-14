import React from 'react';
import Square from './Square';






function Board({ xIsNext, squares, onPlay}) {
  function handleClick(i) {
    // if we click any square after the game is over 
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }

    // for case when the game is not over 
    const nextSquares = squares.slice();
    if (xIsNext && !nextSquares[i]) {
      nextSquares[i] = 'X';
    } else if (!xIsNext && !nextSquares[i]) {
      nextSquares[i] = 'O';
    }
    const row=Math.floor(i/5);
    const col=i%5;
    onPlay(nextSquares,{row,col});
  }

  function calculateWinner(squares) {
    const lines = [
      // Rows
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      // Columns
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      // Diagonals
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
      // Anti-diagonals
      [1, 7, 13, 19],
      [2, 8, 14, 20],
      [5, 11, 17, 23],
      [0, 5, 10, 15],
      [4, 9, 14, 19],
      [9, 13, 17, 21],
      [5, 6, 7, 8],
      [20, 16, 12, 8, 4],
      [15, 11, 7, 3]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d, e] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
        console.log("Winner");
        console.log(squares[a]);
        return {winner:squares[a],winningSquares:[a,b,c,d,e]};
      }
    }
    return {winner:null,winningSquares:[]};
  }
  
  
  const {winner,winningSquares} = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Game is Over!!\nWinner: ' + winner;
    alert(status);
  }
  else if (squares.every(square => square !== null)) {
    status = 'Draw!';
    alert(status);
  }
  else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  }

  return (
    <>
      <div className="status">{status}</div>
      {/* it loops through number 0 to 4,for create 5 rows . 
      Inside each row , It loops through numbers 0 to 4  again to create 5 col
      For each column in a row, it creates a Square component,Each Square component 
      gets a key (unique identifier), a value from the squares array, and an onSquareClick function
       that handles click events. */}
      {[0, 1, 2, 3, 4].map(row => (
        <div key={row} className="board-row">
          {[0, 1, 2, 3, 4].map(col => (
            <Square
              // here key is only uId 
              key={col}
              value={squares[row * 5 + col]}
              onSquareClick={() => handleClick(row * 5 + col)}
              isWiningSquare={winningSquares.includes(row * 5 + col)}

            // here for row=0(col=[0,1,2,3,4])-->[sq[0],sq[1],sq[2],sq[3],sq[4]]
            // here for row=1(col=[0,1,2,3,4])-->[sq[5],sq[6],sq[7],sq[8],sq[9]]
            />
          ))}
        </div>
      ))}
    </>
  );


}


export default Board;
