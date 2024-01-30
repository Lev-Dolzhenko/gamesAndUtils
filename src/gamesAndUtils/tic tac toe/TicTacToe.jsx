import { useState } from "react";
import Square from "./components/Square";

function TicTacToe() {
   const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (i) => {
        const copySquares = squares.slice();
        copySquares[i] = 'X';
        setSquares(copySquares)
    }

  return (
    <>
      <div className="flex flex-col mt-60 items-center ">
        <div className="block">
          <Square value={squares[0]} onSquareClick = {() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick = {() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick = {() => handleClick(2)}/>
        </div>
        <div className="block">
          <Square value={squares[3]} onSquareClick = {() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick = {() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick = {() => handleClick(5)}/>
        </div>
        <div className="block">
          <Square value={squares[6]} onSquareClick = {() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick = {() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick = {() => handleClick(8)}/>
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
