// import React from 'react';
// import React, { useState } from "react";
// // function Square({value}){

// //   function ()=>handleClick()
// //   {
// //     console.log("clicked!");
// //   }
// //   return (
// //     <button className="square"
// //     onClick={()=>handleClick}
// //     >
// //       {value}
// //     </button>

// //   );
// // }

// // as we want the square componenet to remember that it got clicked  and fill 
// // it with an X mark which mark it visited , so we use here useState  and remove the 
// // remove the value from prop

// // always call the useState at the top of fuction for considering the whole components






// function Square(value, onSquareClick) {

//   // const[value,setValue]=useState(Array(9).fill(null));
//   // function handleClick()
//   // {
//   //   // console.log("clicked!");
//   //   setValue('X');
//   //   // when we call set function in a component , react automatically updates 
//   //   // the child components inside too
//   // }
//   return (
//     <button className="square"
//       onClick={onSquareClick}
//     >
//       {value}
//     </button>

//   );
// }

// function TictacBoard({xIsNext,values,onPlay}) {
//   // const [xIsNext, setxIsNext] = useState(true);
//   // here we define thi state fro which user turn it is , we have to store it

//   // const [values, setValues] = useState(Array(9).fill(null));
//   function handleClick(ind) {
//     // the handle click func creates a copy of the square array newValues with
//     // js.slice() array PaymentMethodChangeEvent. then it updates the nextvalues 
//     // array to add X to first index

//     // calling setvalues func lets react know the state of the component 
//     // has changed . this will trigger a re-render of the components that 
//     // use the squares state (board) as well as its child comp 
//     if (calculateWinner(values) || values[ind]) {
//       return;
//     }

//     const nextValues = values.slice();
//     if (xIsNext) {
//       nextValues[ind] = 'X';
//     }
//     else {
//       nextValues[ind] = '0';
//     }

//     setValues(nextValues);
//     setxIsNext(!xIsNext);
//   }
//   const winner = calculateWinner(values);
//   let status;
//   // status is defined for display the status of game whether game is over , who is winner
//   if (winner) {
//     status = 'Winner' + winner;

//   }
//   else {
//     if (xIsNext) {
//       status = 'Next Player :' + 'X';
//     }
//     else {
//       status = 'Next Player :' + '0';
//     }
//   }
//   return (
//     <>
//       {/* <div className="boardRow">
//     <button className="square">1</button>  
//     <button className="square">2</button>
//     <button className="square">3</button>
//     <button className="square">4</button>
//     <button className="square">5</button>
//     </div>

//     <div className="boardRow">
//     <button className="square">6</button>  
//     <button className="square">7</button>
//     <button className="square">8</button>
//     <button className="square">9</button>
//     <button className="square">10</button>
//     </div>

//     <div className="boardRow">
//     <button className="square">11</button>  
//     <button className="square">12</button>
//     <button className="square">13</button>
//     <button className="square">14</button>
//     <button className="square">15</button>
//     </div>

//     <div className="boardRow">
//     <button className="square">16</button>  
//     <button className="square">17</button>
//     <button className="square">18</button>
//     <button className="square">19</button>
//     <button className="square">20</button>
//     </div>

//     <div className="boardRow">
//     <button className="square">21</button>  
//     <button className="square">22</button>
//     <button className="square">23</button>
//     <button className="square">24</button>
//     <button className="square">25</button>
//     </div> */}

//       {/* instead of doing copy more stuffs we can make a function */}


//       <div className="status">{status}</div>
//       <div className="boardRow">
//         <Square value={values[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={values[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={values[2]} onSquareClick={() => handleClick(2)} />
//         <Square value={values[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={values[4]} onSquareClick={() => handleClick(4)} />
//       </div>

//       <div className="boardRow">
//         <Square value={values[5]} onSquareClick={() => handleClick(5)} />
//         <Square value={values[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={values[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={values[8]} onSquareClick={() => handleClick(8)} />
//         <Square value={values[9]} onSquareClick={() => handleClick(9)} />
//       </div>

//       <div className="boardRow">
//         <Square value={values[10]} onSquareClick={() => handleClick(10)} />
//         <Square value={values[11]} onSquareClick={() => handleClick(11)} />
//         <Square value={values[12]} onSquareClick={() => handleClick(12)} />
//         <Square value={values[13]} onSquareClick={() => handleClick(13)} />
//         <Square value={values[14]} onSquareClick={() => handleClick(14)} />
//       </div>

//       <div className="boardRow">
//         <Square value={values[15]} onSquareClick={() => handleClick(15)} />
//         <Square value={values[16]} onSquareClick={() => handleClick(16)} />
//         <Square value={values[17]} onSquareClick={() => handleClick(17)} />
//         <Square value={values[18]} onSquareClick={() => handleClick(18)} />
//         <Square value={values[19]} onSquareClick={() => handleClick(19)} />

//       </div>

//       <div className="boardRow">
//         <Square value={values[20]} onSquareClick={() => handleClick(20)} />
//         <Square value={values[21]} onSquareClick={() => handleClick(21)} />
//         <Square value={values[22]} onSquareClick={() => handleClick(22)} />
//         <Square value={values[23]} onSquareClick={() => handleClick(23)} />
//         <Square value={values[24]} onSquareClick={() => handleClick(24)} />

//       </div>





//     </>

//   );


// }
// export default function Game()
// {
//   //xIsNext === true when currentMove is even and xIsNext === false when currentMove is odd.
//   // You no longer need the xIsNext state declaration or the calls to setXIsNext
//   // const [xIsNext,setxIsNext]=useState(true);

  
//   // here we are delete the values usestate as we store all of those in history
//   // we can update the history

//   const [history,setHistory]=useState([Array(25).fill(null)]);
//   const [currmove,setcurrMove]=useState(0);
//   const xIsNext=currmove%2===0;
//   const currValues=history[currmove];


//   function handlePlay(nextValues)
//   {
//     const nextHistory=[...history.slice(0,currmove+1),nextValues];
//     setHistory(nextHistory);
//     setcurrMove(nextHistory.length-1);
//     // setxIsNext(!xIsNext);
//   }
//   function jumpTo(nxtMove)
//   {
//     setcurrMove(nxtMove);
//     setxIsNext(nxtMove%2===0);

//     // when currmove is even (xIsNext===true) and odd->vice vers 
//     // in other words if you know the value of currmove , then you will already about xisNext

//   }
//   // we can save the history of moves , here each past moves has a unique ID 
//   // associated with it , it's the sequential number of the move . As moves will never be reordered
//   // deleted, or inserted in the middle 

//   //  before you can implement jump to , you need the game component to keep track of which step the user is currently
//   // viewing 


//   const moves=history.map((values,move)=>{
//     let description;
//     if(move>0)
//       {
//         description='Go to move #'+move;
        
//       }
//       else
//       {
//         description='Go to game start';
//       }
//       return(
//         <li key={move}>
//           <button onClick={()=>jumpTo(move)}>{description}</button>
//         </li>
//       );
//   });

//   return(
//     <div className='game'>
//       <div className='game-board'>
//         {/* here we pass the three as props in TictacBoard */}
//         <TictacBoard xIsNext={xIsNext} values={currValues} onPlay={handlePlay}/>
//       </div>

//       <div className='"game-info'>
//         <ol>{moves}</ol>
//       </div>
//     </div>

//   );
// }


// function calculateWinner(values) {
//   const lines = [
//     // Rows
//     [0, 1, 2, 3, 4],
//     [5, 6, 7, 8, 9],
//     [10, 11, 12, 13, 14],
//     [15, 16, 17, 18, 19],
//     [20, 21, 22, 23, 24],
    
//     // Columns
//     [0, 5, 10, 15, 20],
//     [1, 6, 11, 16, 21],
//     [2, 7, 12, 17, 22],
//     [3, 8, 13, 18, 23],
//     [4, 9, 14, 19, 24],
    
//     // Diagonals
//     [0, 6, 12, 18, 24],
//     [4, 8, 12, 16, 20],
    
//     // Anti-diagonals (There are also diagonals of length 4, so include them as well)
//     [1, 7, 13, 19],
//     [2, 8, 14, 20],
//     [5, 11, 17, 23],
//     [0, 5, 10, 15],
//     [4, 9, 14, 19],
//     [9, 13, 17, 21],
//     [5, 6, 7, 8],
//     [20, 16, 12, 8, 4],
//     [15, 11, 7, 3]
//   ];

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c, d, e] = lines[i];
//     if (values[a] && values[a] === values[b] && values[a] === values[c] && values[a] === values[d] && values[a] === values[e]) {
//       return values[a];
//     }
//   }
//   return null;
// }



// // note:-
// // js support closure which means an inner func (handle click) has access 
// // to variables and functions defined in a outer function defined in a outer function
// // that means  handle click read the squares state and call the setsquare 




// -------------------------------------------------------------------------------------------------------




import React from 'react';
import Game from './Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;

