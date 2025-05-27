import { useState, useReducer, useEffect } from "react";
import Test from "./Test";

const intial = { count: 0 };

interface State {
  count: number;
}

interface Action {
  type: "INCREASE" | "DECREASE";
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default: {
      throw new Error("invalid type: " + (action as any).type);
    }
  }
};

function App() {
  //   const product = {
  //     name: "99con",
  //     price: 3000,
  //     category: {
  //       id: 1,
  //     },
  //   };
  //   const [list, setList] = useState([]);
  //   function handleCreate(input) {
  //     setList((pre) => pre.concat(input));
  //   }
  //   function handleUpdate(input) {
  //     setList((pre) => pre.map((i) => (i.id === input.id ? input : i)));
  //   }

  const [state, dispatch] = useReducer(reducer, intial);

  return (
    <div>
      <h1>count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
      <Test />
    </div>
  );
}

export default App;
