import { useState } from "react";
import GameBoard from "./GameBoard";


const Game = () => {
  const [squares, setSquares] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = squares[squares.length - 1];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...squares.slice(0, currentMove + 1), nextSquares]
    setSquares(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = squares.map((square, move) => {
    let description;
    if( move > 0 ) {
        description = `Go to the move # ${move}`;
    } else {
        description = `Go to start the game`;
    }
    return(
        <li
            key={move}
            className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    )
})

  return (
    <div className="flex justify-center">
      <div>
        <GameBoard xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol className="border border-gray-400 p-1 text-lg">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
