import { useRef, useState } from "react";

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>focus</button>
    </div>
  );
}

function App() {
  //   const ref = useRef(0);
  //   console.log(ref.current);

  // const [seconds, setSeconds] = useState(0);
  // const timerRef = useRef(null);
  const [seconds, setSeconds] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setSeconds((pre) => pre + 1);
    }, 1000);
  };

  const handleEnd = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div>
      <h1>Timer: {seconds}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>End</button>
      <FocusInput />
    </div>
  );
}

export default App;
