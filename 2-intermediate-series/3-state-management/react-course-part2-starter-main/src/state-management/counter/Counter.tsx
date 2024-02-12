import { useReducer, useState } from "react";
import useCounterStore from "./store";

const Counter = () => {

  //we can replace the reducer with Zustand now.
  //const [value, dispatch] = useReducer(counterReducer, 0);
  const {counter, max, incrment, reset} = useCounterStore();

  return (
    <div>
      Counter ({counter})
      MAX ({max})
      <button
        onClick={() => incrment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
