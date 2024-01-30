import './square.css'

function Square({value, onSquareClick}) {
  return (
    <>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </>
  );
}

export default Square;
// bg-white border border-gray-700 float-left size-6 font-bold leading-8 h-8 -mr-0 -mt-0 p-0 text-center w-8