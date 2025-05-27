import { useEffect, useState } from "react";

// const useTest = (num: number) => {
//   const num2 = useState(0);
//   const [count, setCount] = num2;

//   useEffect(() => {
//     setCount((prev) => prev + num);
//   }, [num, setCount]);
//   return count;
// };

const useTest = (num: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + num);
  }, [num, setCount]);
  return [count, setCount] as const;
};

export default useTest;
