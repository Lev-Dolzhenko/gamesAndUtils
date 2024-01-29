import { useState } from "react";

import iconMinus from "./iconMinus.svg";
import iconPlus from "./iconPlus.svg";
import iconReset from "./iconReset.svg";

function Counter() {
  const [counter, setCounter] = useState(0);

  const counterMinus = () => {
    setCounter(counter - 1);
  };

  const counterPlus = () => {
    setCounter(counter + 1);
  };

  const counterReset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="mt-80 flex flex-col items-center">
        <h1 className=" text-centre text-green-500 text-70">{counter}</h1>
        <div className="flex gap-x-2">
          <button
            onClick={counterMinus}
            className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-md hover:bg-green-600 transition-colors active:translate-y-1"
          >
            <img src={iconMinus} alt="minus" className="w-8" />
          </button>
          <button
            onClick={counterPlus}
            className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-md hover:bg-green-600 transition-colors active:translate-y-1"
          >
            <img src={iconPlus} alt="plus" className="w-8" />
          </button>
          <button
            onClick={counterReset}
            className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-md hover:bg-green-600 transition-colors active:translate-y-1"
          >
            <img src={iconReset} alt="reset" className="w-8" />
          </button>
        </div>
      </div>

    </>
  );
}

export default Counter;
