import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      State: {count}
      <button
        onClick={() => {
          // 0 > 1 > 2 > 3
          //   setCount(count + 1); // 1
          //   setCount(count + 1); // 1
          //   setCount(count + 1); // 1
          //   setCount((pre) => pre + 1);

          setCount(count + 1); // 1
          setTimeout(() => {
            // 0
            alert(count); // 1
          }, 1000);
        }}
      >
        Update
      </button>
    </div>
  );
}

function App() {
  // count = 0
  const [count, setCount] = useState(0);
  const handleUpdate = () => {
    // 0
    setCount(count + 1);
  };
  return (
    <div>
      State: {count}
      <button onClick={handleUpdate}>Update</button>
      <Counter />
    </div>
  );
}

export default App;
