const GameSquare = ({value,onSquareClick}) => {
  return (
    <div className=" text-center align-middle bg-white border border-gray-400 h-12 w-12  text-4xl" onClick={onSquareClick}>
      {value}
    </div>
  );
};

export default GameSquare;
