import { useState } from "react";
import Square from "./components/Square";

function TicTacToe() {
  const [isX, setIsX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (i) => {
    const copySquares = squares.slice();
    setSquares(copySquares);
    if (copySquares[i] || calculateWinner(squares)) return;

    if (isX) {
      copySquares[i] = "X";
    } else {
      copySquares[i] = "O";
    }

    setIsX(!isX);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isX ? 'X' : 'O');
  }


  return (
    <div className="flex flex-col mt-40 gap-y-4 text-center">
    <h3 className="text-white">{status}</h3>
      <div className="flex flex-col  items-center ">
        <div className="block">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="block">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="block">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
