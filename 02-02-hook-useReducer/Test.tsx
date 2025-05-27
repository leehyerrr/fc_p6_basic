import { useState, useReducer, useEffect } from "react";

const intial = 0;

type State = number;

interface Action {
  type: "INCREASE" | "DECREASE";
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default: {
      throw new Error("invalid type: " + (action as any).type);
    }
  }
};

function Test() {
  const [state, dispatch] = useReducer(reducer, intial);

  return (
    <div>
      <h1>count24: {state}</h1>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
    </div>
  );
}

export default Test;
