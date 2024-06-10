import { useState } from "react";
import GameBoard from "./GameBoard";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="flex justify-center">
      <div>
        <GameBoard value={squares} />
      </div>
      <div></div>
    </div>
  );
};

export default Game;
