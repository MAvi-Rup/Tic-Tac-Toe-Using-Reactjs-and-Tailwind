import GameSquare from "./GameSquare";

const GameBoard = () => {
  return (
    <div className="flex">
      <div>
        <GameSquare />
        <GameSquare />
        <GameSquare />
      </div>
      <div>
        <GameSquare />
        <GameSquare />
        <GameSquare />
      </div>
      <div>
        <GameSquare />
        <GameSquare />
        <GameSquare />
      </div>
    </div>
  );
};

export default GameBoard;
